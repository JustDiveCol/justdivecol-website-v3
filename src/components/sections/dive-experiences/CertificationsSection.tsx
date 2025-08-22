// src/components/sections/dive-experiences/CertificationsSection.tsx
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { CertificationCard } from '../shared/CertificationCard';
import type { CertificationsSectionProps } from './types';
import { listCertificationCards } from '../../../content/certifications';
import { listSessions } from '../../../content/experiences';
import type { AvailableType, CertificationId } from '../../../constants';
import { useMotionPresets } from '../../../hooks/animations';
import { MotionBlock } from '../../motion/MotionBlock';

const LEVEL_ORDER = { entry: 0, advanced: 1, rescue: 2 } as const;

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
    if (!s.certificationIds?.length) return false;
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
  const { fadeIn } = useMotionPresets();

  const certificationsRaw = listCertificationCards();
  const sessions = listSessions();

  const certifications = useMemo(() => {
    const arr = [...certificationsRaw];
    arr.sort(compareCerts);
    return arr;
  }, [certificationsRaw]);

  const total = certifications.length;
  const hasSingleInLastRowLg = total % 3 === 1;

  return (
    <section className="bg-brand-primary-dark py-16 px-4" id="certifications">
      <div className="container mx-auto">
        <div className="max-w-max mx-auto text-center mb-12">
          <MotionBlock kind="inView" variants={fadeIn()}>
            <h2 className="heading-3 text-white">{t(titleKey)}</h2>
          </MotionBlock>
          <MotionBlock kind="inView" variants={fadeIn({ delay: 0.06 })}>
            <p className="text-subtitle mt-4">{t(subtitleKey)}</p>
          </MotionBlock>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-stretch gap-8 max-w-6xl mx-auto">
          {certifications
            .filter((cert) => cert.published)
            .map((cert, idx) => {
              const status = getCertificationStatus(cert.id, sessions);
              const isLast = idx === total - 1;
              const extraPos =
                isLast && hasSingleInLastRowLg ? ' lg:col-start-2' : '';

              return (
                <CertificationCard
                  key={cert.id}
                  certificationData={cert}
                  availabilityStatus={status}
                  className={`h-full drop-shadow-strong${extraPos}`}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};
