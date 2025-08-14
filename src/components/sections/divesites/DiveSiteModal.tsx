// src/components/sections/divesites/DiveSiteModal.tsx
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { createPortal } from 'react-dom';
import { CloseIcon } from '../../ui';
import { ImageComponent } from '../../common/ImageComponent';
import type { DiveSiteModalProps, TagCategoryId } from './types';
import type { ImageComponentData } from '../../common/types';

// Color para pills según categoría
const getTagColorClass = (categoryId?: TagCategoryId) => {
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

// util para buscar por id (acepta arreglos readonly)
const byId = <T extends { id: string }>(arr: readonly T[], id: string) =>
  arr.find((x) => x.id === id) || null;

export const DiveSiteModal = ({
  site,
  onClose,
  translationNS,
  difficulties,
  types,
  conditions,
  tags,
}: DiveSiteModalProps) => {
  const { t } = useTranslation();
  const [showFullDescription, setShowFullDescription] = useState(false);

  // Esc + scroll lock
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  // si no hay sitio, no renderizamos el modal
  if (!site) return null;

  const descriptionText = t(site.descriptionKey, { ns: translationNS });
  const isLong = descriptionText.length > 180;
  const displayedText =
    showFullDescription || !isLong
      ? descriptionText
      : `${descriptionText.slice(0, 180)}…`;

  // cálculos simples (sin hooks)
  const difficulty = byId(difficulties, site.difficultyId);

  const mainImageData: ImageComponentData | undefined = (() => {
    const p = site.photos?.[0];
    return p
      ? {
          backgroundImage: p.backgroundImage,
          photoCredit: p.photoCredit,
          variant: 'horizontal',
        }
      : undefined;
  })();

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
            {mainImageData && (
              <ImageComponent
                imageData={mainImageData}
                className='absolute inset-0'
                translationNS={translationNS}
              />
            )}
            <div className='absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent' />
            <button
              onClick={onClose}
              className='absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-10 bg-white/50 rounded-full p-1'
              type='button'>
              <CloseIcon className='h-6 w-6' />
            </button>
          </div>

          <div className='p-6 -mt-16 relative z-10 bg-white rounded-t-lg'>
            <h2 className='heading-3 text-brand-primary-dark pr-8'>
              {t(site.nameKey, { ns: translationNS })}
            </h2>

            {/* Tipos */}
            {site.typeIds.length > 0 && (
              <p className='text-sm text-brand-primary-light italic -mt-2 mb-4'>
                {site.typeIds.map((typeId, idx) => {
                  const type = byId(types, typeId);
                  const label = type
                    ? t(type.nameKey, { ns: translationNS })
                    : typeId;
                  return (
                    <span key={typeId}>
                      {label}
                      {idx < site.typeIds.length - 1 && ' · '}
                    </span>
                  );
                })}
              </p>
            )}

            {/* Descripción */}
            <div className='mt-4 text-base text-brand-primary-medium space-y-3 font-serif'>
              <p>
                {displayedText}
                {isLong && !showFullDescription && (
                  <button
                    onClick={() => setShowFullDescription(true)}
                    className='ml-1 underline text-brand-cta-orange font-bold text-sm'
                    type='button'>
                    {t('viewMoreLabel', { ns: 'common' })}
                  </button>
                )}
              </p>
            </div>

            {/* Detalle numérico */}
            <ul className='text-sm space-y-2 mt-4 border-t pt-4'>
              <li>
                <span className='font-bold text-brand-primary-dark'>
                  {t('maxDepthLabel', { ns: 'common' })}:
                </span>
                <span className='text-brand-primary-medium'>
                  {' '}
                  {site.maxDepthMeter}m
                </span>
              </li>

              {difficulty && (
                <li>
                  <span className='font-bold text-brand-primary-dark'>
                    {t('difficultyLabel', { ns: 'common' })}:
                  </span>
                  <span className='text-brand-primary-medium'>
                    {' '}
                    {t(difficulty.nameKey, { ns: translationNS })}
                  </span>
                </li>
              )}

              {site.conditionsIds.length > 0 && (
                <li>
                  <span className='font-bold text-brand-primary-dark'>
                    {t('conditionsLabel', { ns: 'common' })}:
                  </span>
                  <span className='text-brand-primary-medium'>
                    {site.conditionsIds.map((condId, idx) => {
                      const condition = byId(conditions, condId);
                      const label = condition
                        ? t(condition.nameKey, { ns: translationNS })
                        : condId;
                      return (
                        <span key={condId}>
                          {' '}
                          {label}
                          {idx < site.conditionsIds.length - 1 && ', '}
                        </span>
                      );
                    })}
                  </span>
                </li>
              )}
            </ul>

            {/* Tags */}
            {site.tagsIds.length > 0 && (
              <div className='mt-6'>
                <h4 className='font-bold text-brand-primary-dark mb-2'>
                  {t('tagsLabel', { ns: 'common' })}
                </h4>
                <div className='flex flex-wrap gap-2'>
                  {site.tagsIds.map((tagId) => {
                    const tag = byId(tags, tagId);
                    if (!tag) return null;
                    return (
                      <span
                        key={tag.id}
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getTagColorClass(
                          tag.categoryId
                        )}`}>
                        {t(tag.nameKey, { ns: translationNS })}
                      </span>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Galería */}
            {site.photos?.length ? (
              <div className='mt-6'>
                <h3 className='heading-5 text-brand-primary-dark mb-4'>
                  {t('galleryTitle', { ns: 'common' })}
                </h3>
                <div className='grid grid-cols-2 sm:grid-cols-3 gap-2'>
                  {site.photos.map((photo, idx) => {
                    const img: ImageComponentData = {
                      backgroundImage: photo.backgroundImage,
                      photoCredit: photo.photoCredit,
                      variant: 'horizontal',
                    };
                    return (
                      <div
                        key={idx}
                        className='aspect-video rounded-lg overflow-hidden shadow-md'>
                        <ImageComponent
                          imageData={img}
                          translationNS={translationNS}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
};
