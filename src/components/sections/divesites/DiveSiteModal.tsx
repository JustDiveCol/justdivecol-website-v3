// src/components/sections/divesites/DiveSiteModal.tsx
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { createPortal } from 'react-dom';
import { CloseIcon } from '../../ui';
import { ImageComponent } from '../../common/ImageComponent';
import type { DiveSiteModalProps } from './types';
import type { ImageComponentData } from '../../common/types';
import type { DiveTagCategoryId } from '../../../lib/db/constants';

const getTagColorClass = (categoryId?: DiveTagCategoryId) => {
  switch (categoryId) {
    case 'marine-life':
      return 'bg-green-100 text-green-800';
    case 'dive-characteristics':
      return 'bg-blue-100 text-blue-800';
    case 'features':
      return 'bg-yellow-100 text-yellow-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export const DiveSiteModal = ({
  site,
  onClose,
  translationNS,
}: DiveSiteModalProps) => {
  const { t } = useTranslation([translationNS, 'common']);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!site) return null;

  const descriptionText = t(site.descriptionKey);
  const isLong = descriptionText.length > 180;
  const displayedText =
    showFullDescription || !isLong
      ? descriptionText
      : `${descriptionText.slice(0, 180)}…`;
  const difficulty = getDifficultyByI(site.difficultyId);

  const mainImageData: ImageComponentData = {
    backgroundImage: site.featuredImage.backgroundImage,
    photoCredit: site.featuredImage.photoCredit,
    variant: 'horizontal',
  };

  const modalContent = (
    <AnimatePresence>
      <motion.div
        className='fixed inset-0 z-[99] flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}>
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: '0%' }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', stiffness: 400, damping: 40 }}
          className='relative bg-white w-full max-w-2xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto rounded-t-xl sm:rounded-xl shadow-lg'
          onClick={(e) => e.stopPropagation()}>
          <div className='relative h-72 w-full'>
            <ImageComponent
              imageData={mainImageData}
              className='absolute inset-0'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent' />
            <button
              onClick={onClose}
              className='absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-10 bg-white/50 rounded-full p-1'>
              <CloseIcon className='h-6 w-6' />
            </button>
          </div>

          <div className='p-6 -mt-16 relative z-10 bg-white rounded-t-lg'>
            <h2 className='heading-3 text-brand-primary-dark pr-8'>
              {t(site.nameKey)}
            </h2>

            {site.typeIds?.length > 0 && (
              <p className='text-sm text-brand-primary-light italic -mt-2 mb-4'>
                {site.typeIds.map((typeId, idx) => {
                  const type = getDiveTypeById(typeId);
                  return (
                    <span key={typeId}>
                      {type ? t(type.translationKey) : typeId}
                      {idx < site.typeIds.length - 1 && ' · '}
                    </span>
                  );
                })}
              </p>
            )}

            <div className='mt-4 text-base text-brand-primary-medium space-y-3 font-serif'>
              <p>
                {displayedText}
                {isLong && !showFullDescription && (
                  <button
                    onClick={() => setShowFullDescription(true)}
                    className='ml-1 underline text-brand-cta-orange font-bold text-sm'>
                    {t('viewMoreLabel', { ns: 'common' })}
                  </button>
                )}
              </p>
            </div>

            <ul className='text-sm space-y-2 mt-4 border-t pt-4'>
              {site.maxDepth && (
                <li>
                  <span className='font-bold text-brand-primary-dark'>
                    {t('maxDepthLabel', { ns: 'common' })}:
                  </span>
                  <span className='text-brand-primary-medium'>
                    {' '}
                    {site.maxDepth}m
                  </span>
                </li>
              )}
              {difficulty && (
                <li>
                  <span className='font-bold text-brand-primary-dark'>
                    {t('difficultyLabel', { ns: 'common' })}:
                  </span>
                  <span className='text-brand-primary-medium'>
                    {' '}
                    {t(difficulty.translationKey, { ns: 'dive-sites' })}
                  </span>
                </li>
              )}
              {site.conditionsIds?.length > 0 && (
                <li>
                  <span className='font-bold text-brand-primary-dark'>
                    {t('conditionsLabel', { ns: 'common' })}:
                  </span>
                  <span className='text-brand-primary-medium'>
                    {site.conditionsIds.map((condId, idx) => {
                      const condition = getDiveConditionById(condId);
                      return (
                        <span key={condId}>
                          {' '}
                          {condition ? t(condition.translationKey) : condId}
                          {idx < site.conditionsIds.length - 1 && ', '}
                        </span>
                      );
                    })}
                  </span>
                </li>
              )}
            </ul>

            {site.tagsIds?.length > 0 && (
              <div className='mt-6'>
                <h4 className='font-bold text-brand-primary-dark mb-2'>
                  {t('tagsLabel', { ns: 'common' })}
                </h4>
                <div className='flex flex-wrap gap-2'>
                  {site.tagsIds.map((tagId) => {
                    // Usamos el helper que ya devuelve el categoryId
                    const tag = getDiveTagById(
                      tagId
                    ) as DiveTagWithCategory | null;
                    if (!tag) return null;

                    return (
                      <span
                        key={tag.id}
                        className={`
              px-2 py-1 rounded-full text-xs font-medium
              ${getTagColorClass(tag.categoryId)}
            `}>
                        {/* translationKey es el campo correcto en tu tipo DiveTag */}
                        {t(tag.translationKey, { ns: 'dive-sites' })}
                      </span>
                    );
                  })}
                </div>
              </div>
            )}

            {site.photos?.length > 0 && (
              <div className='mt-6'>
                <h3 className='heading-5 text-brand-primary-dark mb-4'>
                  {t('galleryTitle', { ns: 'common' })}
                </h3>
                <div className='grid grid-cols-2 sm:grid-cols-3 gap-2'>
                  {site.photos.map((photo, idx) => {
                    const imageDataForComponent: ImageComponentData = {
                      backgroundImage: photo.backgroundImage,
                      photoCredit: photo.photoCredit,
                      variant: 'horizontal',
                    };
                    return (
                      <div
                        key={idx}
                        className='aspect-video rounded-lg overflow-hidden shadow-md'>
                        <ImageComponent
                          imageData={imageDataForComponent}
                          translationNS='dive-sites'
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
};
