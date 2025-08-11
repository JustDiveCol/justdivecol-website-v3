// src/components/sections/certifications/AvailableSessions.tsx
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { CalendarIcon } from '../../ui'; // Asumimos que tienes este icono
import { getAvailableSessionsForCertification } from '../../../data/certifications/utils';
import type { CertificationId } from '../../../constants/certifications';

interface AvailableSessionsProps {
  certificationId: CertificationId;
}

export const AvailableSessions = ({
  certificationId,
}: AvailableSessionsProps) => {
  const { t, i18n } = useTranslation(['certifications', 'common']);
  const availableSessions =
    getAvailableSessionsForCertification(certificationId);

  if (availableSessions.length === 0) {
    return null;
  }

  return (
    <section className='bg-brand-primary-medium py-12'>
      <div className='container mx-auto px-4'>
        {/* Header con título y enlace a “Ver todo” */}
        <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8'>
          <h2 className='heading-4 text-white'>
            {t('availableSessionsTitle')}
          </h2>
          <Link
            to='/experiences'
            className='mt-4 sm:mt-0 text-sm text-brand-cta-yellow hover:underline'>
            {t('viewAllSessions')}
          </Link>
        </div>

        {/* Grid responsive de tarjetas */}
        <div className='flex flex-wrap justify-center gap-6'>
          {availableSessions.slice(0, 3).map((session) => {
            const d = new Date(session.startDate);
            d.setMinutes(d.getMinutes() + d.getTimezoneOffset());
            const formattedDate = d.toLocaleDateString(i18n.language, {
              month: 'long',
              day: 'numeric',
            });

            return (
              <Link
                key={session.id}
                to={`/experiences/${session.experienceSlug}`}
                className='block flex-shrink-0 w-full max-w-sm p-5 rounded-xl bg-white/5 hover:bg-white/10 transition transform hover:-translate-y-1 shadow-md hover:shadow-lg'>
                {/* Título + sello */}
                <div className='flex items-center justify-between'>
                  <h3 className='text-lg font-semibold text-brand-white'>
                    {t(session.experienceNameKey, { ns: 'experiences' })}
                  </h3>
                  {session.creyentes && (
                    <img
                      src='/images/logos/creyentes-logo.png'
                      alt={t('creyentesTripSealAlt')}
                      className='w-8 h-8'
                      loading='lazy'
                    />
                  )}
                </div>

                {/* Fecha */}
                <div className='mt-3 flex items-center gap-2 text-sm text-brand-neutral/80'>
                  <CalendarIcon className='w-4 h-4' />
                  <span>{formattedDate}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
