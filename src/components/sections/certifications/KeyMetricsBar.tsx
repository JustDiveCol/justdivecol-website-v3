// src/components/sections/certifications/KeyMetricsBar.tsx
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useMotionPresets } from '../../../hooks/animations';
import type { KeyMetricsProps } from './types';
import { ClockIcon, UserIcon, DiverIcon, CalendarIcon } from '../../ui';

const MetricItem = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }}
    className='flex flex-col items-center text-center'>
    <div className='text-brand-cta-orange drop-shadow-strong'>{icon}</div>
    <p className='mt-2 text-2xl font-bold text-white'>{value}</p>
    <p className='text-xs uppercase tracking-wider text-brand-neutral/80'>
      {label}
    </p>
  </motion.div>
);

export const KeyMetricsBar = ({
  minAge,
  maxDepthMeter,
  maxDepthFt,
  estimatedDuration,
  translationNS,
}: KeyMetricsProps) => {
  const { t } = useTranslation([translationNS, 'common', 'certifications']);

  const { container } = useMotionPresets();

  const metrics = [
    {
      icon: <DiverIcon className='h-8 w-8' />,
      label: t('certifications.details.maxDepth'),
      value: `${maxDepthMeter}m / ${maxDepthFt}ft`,
    },
    {
      icon: <UserIcon className='h-8 w-8' />,
      label: t('certifications.details.minAge'),
      value: `${minAge}+ ${t('common:years')}`,
    },
    {
      icon: <CalendarIcon className='h-8 w-8' />,
      label: t('common:duration'),
      value: `${estimatedDuration.totalDays[0]}-${
        estimatedDuration.totalDays[1]
      } ${t('common:days')}`,
    },
    {
      icon: <ClockIcon className='h-8 w-8' />,
      label: t('common:elearning'),
      value: `${estimatedDuration.eLearningHours[0]}-${
        estimatedDuration.eLearningHours[1]
      } ${t('common:hours')}`,
    },
  ];

  return (
    <motion.div
      className='bg-brand-primary-medium'
      variants={container}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.5 }}>
      <div className='section grid grid-cols-2 md:grid-cols-4 gap-8 py-8'>
        {metrics.map((metric) => (
          <MetricItem
            key={metric.label}
            {...metric}
          />
        ))}
      </div>
    </motion.div>
  );
};
