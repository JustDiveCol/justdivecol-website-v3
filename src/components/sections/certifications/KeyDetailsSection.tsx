// src/components/sections/certifications/KeyDetailsSection.tsx
import { useTranslation } from 'react-i18next';
import { ClockIcon, BarChartIcon, UserIcon } from '../../ui/Icons';
import { Button } from '../../common/Button';
import type { Certification } from '../../../data/certifications/types';

// El componente recibe 'details' y 'cta' por separado
interface KeyDetailsSectionProps {
  details: Certification['details'];
  ctaButton?: Certification['ctaButton'];
}

// Mapeo de 'labelKey' a un icono
const iconMap: { [key: string]: React.ReactNode } = {
  detailsMaxDepth: <BarChartIcon className='h-8 w-8 text-brand-cta-orange' />,
  detailsMinAge: <UserIcon className='h-8 w-8 text-brand-cta-orange' />,
};

export const KeyDetailsSection = ({
  details,
  ctaButton,
}: KeyDetailsSectionProps) => {
  const { t } = useTranslation(['certifications', 'common']);

  return (
    <section className='bg-brand-primary-dark'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap justify-center items-stretch gap-8 py-12'>
          {/* Tarjeta de Duración (renderizada individualmente) */}
          <div className='flex flex-col items-center text-center p-6 bg-brand-primary-medium rounded-lg lg:flex-1 min-w-[200px]'>
            <ClockIcon className='h-8 w-8 text-brand-cta-orange' />
            <span className='mt-2 font-bold text-xl text-brand-white'>
              {t(details.durationKey, { ns: 'certifications' })}
            </span>
            <span className='text-sm text-brand-neutral/80'>
              {t('detailsDuration', { ns: 'common' })}
            </span>
          </div>

          {/* Mapeamos el resto de los ítems de detalle */}
          {details.items.map((item) => (
            <div
              key={item.labelKey}
              className='flex flex-col items-center text-center p-6 bg-brand-primary-medium rounded-lg lg:flex-1 min-w-[200px]'>
              {iconMap[item.labelKey]}
              <span className='mt-2 font-bold text-xl text-brand-white'>
                {t(item.valueKey, { ns: 'certifications' })}
              </span>
              <span className='text-sm text-brand-neutral/80'>
                {t(item.labelKey, { ns: 'common' })}
              </span>
            </div>
          ))}
        </div>

        {/* Tarjeta de CTA (renderizada al final) */}
        {ctaButton && (
          <div className='p-6'>
            <div className='flex flex-col items-center justify-center text-center p-6 bg-brand-cta-green/10 rounded-lg lg:flex-1 min-w-[200px] border border-brand-cta-green/50'>
              <h3 className='font-bold text-lg text-brand-white'>
                ¿Listo para empezar?
              </h3>
              <div className='mt-4'>
                <Button
                  action={ctaButton.action}
                  variant='primary'
                  size='sm'>
                  {t(ctaButton.textKey, { ns: 'certifications' })}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
