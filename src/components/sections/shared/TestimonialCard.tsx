import { useTranslation } from 'react-i18next';
import { QuoteIcon, StarRating } from '../../ui/Icons';

// --- Tipado de Props ---
type TestimonialData = {
  id: number;
  quoteKey: string;
  name: string;
  origin: string;
  rating: number;
  avatarUrl: string;
};

interface TestimonialCardProps {
  cardData: TestimonialData;
}

export const TestimonialCard = ({ cardData }: TestimonialCardProps) => {
  const { t } = useTranslation('common');
  const { quoteKey, name, origin, rating, avatarUrl } = cardData;

  return (
    <div className='relative flex h-full flex-col rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-sm'>
      {/* Icono de comillas como fondo decorativo */}
      <QuoteIcon className='absolute top-4 right-4 h-24 w-24 text-white/5' />

      {/* Contenido principal */}
      <div className='relative z-10 flex flex-grow flex-col'>
        <StarRating rating={rating} />
        <p className='mt-4 flex-grow text-left font-serif text-base text-brand-neutral/90'>
          "{t(`testimonials.${quoteKey}`)}"
        </p>

        {/* Separador y autor */}
        <div className='mt-6 border-t border-white/10 pt-6 flex items-center gap-4'>
          <img
            src={avatarUrl}
            alt={name}
            className='h-12 w-12 rounded-full object-cover ring-2 ring-brand-cta-green'
            loading='lazy'
          />
          <div className='text-left'>
            <h4 className='font-bold text-brand-white'>{name}</h4>
            <p className='text-sm text-brand-neutral/80'>{origin}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
