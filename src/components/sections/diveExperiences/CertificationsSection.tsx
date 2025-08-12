// src/components/sections/experiences/CertificationsSection.tsx
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import { CertificationCard } from '../shared/CertificationCard';
import type { CertificationsSectionProps } from './types';
import { listCertificationCards } from '../../../content/certifications';
import { listSessions } from '../../../content/experiences'; // <-- usa la ruta donde expongas las sesiones
import { useMotionPresets } from '../../../hooks/animations';
import type { AvailableType, CertificationId } from '../../../constants';

/** Orden semántico por nivel → código */
const LEVEL_ORDER = {
  entry: 0,
  advanced: 1,
  rescue: 2,
} as const;

type CertCard = ReturnType<typeof listCertificationCards>[number];
type SessionItem = ReturnType<typeof listSessions>[number];

function compareCerts(a: CertCard, b: CertCard): number {
  const la =
    (LEVEL_ORDER as Record<string, number>)[
      a.level as keyof typeof LEVEL_ORDER
    ] ?? 99;
  const lb =
    (LEVEL_ORDER as Record<string, number>)[
      b.level as keyof typeof LEVEL_ORDER
    ] ?? 99;
  if (la !== lb) return la - lb;

  const byCode = String(a.code ?? '').localeCompare(String(b.code ?? ''));
  if (byCode !== 0) return byCode;

  return String(a.titleKey ?? '').localeCompare(String(b.titleKey ?? ''));
}

// Helpers de fecha (ISO 'YYYY-MM-DD' en UTC)
const toUTC = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number);
  return Date.UTC(y, m - 1, d);
};
const todayUTC = () => {
  const now = new Date();
  return Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
};

function getCertificationStatus(
  certId: CertificationId,
  sessions: SessionItem[]
): AvailableType {
  const today = todayUTC();

  const hasUpcomingWithSeats = sessions.some((s) => {
    if (!s.certificationIds || s.certificationIds.length === 0) return false;

    if (!s.certificationIds.includes(certId)) return false;

    if (toUTC(s.startDate) < today) return false;

    const notSoldOut = s.availability !== 'sold_out';
    const seats =
      typeof s.seatsAvailable === 'number' ? s.seatsAvailable > 0 : true;

    return notSoldOut && seats;
  });

  return hasUpcomingWithSeats ? 'available' : 'coming_soon';
}

export const CertificationsSection = ({
  titleKey,
  subtitleKey,
  translationNS,
}: CertificationsSectionProps) => {
  const { t } = useTranslation([translationNS, 'certifications', 'common']);
  const { container, fadeIn } = useMotionPresets();

  const certificationsRaw = listCertificationCards();
  const sessions = listSessions();

  const certifications = useMemo(() => {
    const arr = [...certificationsRaw];
    arr.sort(compareCerts);
    return arr;
  }, [certificationsRaw]);

  return (
    <section
      className='bg-brand-primary-medium py-20 px-4'
      id='certifications'>
      <div className='container mx-auto'>
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <motion.h2
            className='heading-2 text-white'
            variants={fadeIn()}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}>
            {t(titleKey)}
          </motion.h2>
          <motion.p
            className='text-subtitle mt-4'
            variants={fadeIn()}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}>
            {t(subtitleKey)}
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          className='flex flex-wrap justify-center items-stretch gap-8 max-w-6xl mx-auto'>
          {certifications.map((cert) => {
            const status = getCertificationStatus(cert.id, sessions);
            return (
              <CertificationCard
                key={cert.id}
                certificationData={cert}
                availabilityStatus={status}
                className='w-full sm:w-1/2 lg:w-[30%] h-full flex flex-col'
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
