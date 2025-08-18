// src/components/sections/experiences/ExperiencePaymentPlan.tsx
import { useTranslation } from 'react-i18next';
import { useMotionPresets } from '../../../hooks/animations';
import type { ExperiencePaymentPlanProps } from './types';
import {
  BankTransferIcon,
  CreditCardIcon,
  PaymentLinkIcon,
  WalletIcon,
  CashIcon,
  QrCodeIcon,
} from '../../ui';
import { MotionBlock } from '../../motion/MotionBlock';
import { paymentMethodContent } from '../../../content/experiences/payment-method.content';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  wallet: WalletIcon,
  bank: BankTransferIcon,
  link: PaymentLinkIcon,
  card: CreditCardIcon,
  cash: CashIcon,
  qr: QrCodeIcon,
};

const IconBadge = ({ kind }: { kind: string }) => {
  const Icon = iconMap[kind] || WalletIcon;
  return (
    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15">
      <Icon className="h-5 w-5 text-brand-cta-green/90" aria-hidden />
      <span className="sr-only">{kind}</span>
    </div>
  );
};

export const ExperiencePaymentPlan = ({
  paymentPlan,
  pricingOptions,
  translationNS,
}: ExperiencePaymentPlanProps) => {
  const { t, i18n } = useTranslation([translationNS, 'common']);
  const { container, fadeIn } = useMotionPresets();

  const formatMoney = (value: number, currency = 'USD') =>
    new Intl.NumberFormat(i18n.language, {
      style: 'currency',
      currency,
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <section className="bg-brand-primary-medium">
      <div className="section max-w-4xl mx-auto">
        {/* Título del plan */}
        <MotionBlock
          kind="inView"
          variants={fadeIn()}
          className="text-center mb-12"
        >
          <h2 className="heading-3 text-white">{t(paymentPlan.titleKey)}</h2>
        </MotionBlock>

        {/* Línea temporal de cuotas */}
        <MotionBlock
          kind="inView"
          variants={container}
          className="relative pl-8 transform-gpu will-change-transform"
        >
          <div className="absolute left-0 top-0 h-full w-px bg-white/20" />

          {paymentPlan.installments.map((installment, index) => {
            const date = installment.date
              ? new Date(`${installment.date}T00:00:00Z`)
              : null;
            const isValidDate = !!date && !isNaN(date.getTime());
            const formattedDate = isValidDate
              ? new Intl.DateTimeFormat(i18n.language, {
                  dateStyle: 'long',
                  timeZone: 'UTC',
                }).format(date!)
              : null;

            return (
              <MotionBlock
                key={index}
                kind="none"
                variants={fadeIn()}
                className="relative mb-12"
              >
                <div className="absolute -left-12 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary-dark border-2 border-brand-cta-orange">
                  <WalletIcon className="h-5 w-5 text-brand-cta-orange" />
                </div>

                {/* Encabezado de la cuota */}
                <h3 className="heading-5 text-white mt-1">
                  {installment.percentage ? `${installment.percentage}%` : ''}
                  {installment.amount
                    ? `${installment.percentage ? ' · ' : ' '}${formatMoney(
                        installment.amount
                      )}`
                    : ''}
                </h3>

                <p className="mt-1 text-brand-neutral/90 font-serif">
                  {t(installment.descriptionKey)}
                </p>

                {formattedDate && (
                  <p className="text-sm uppercase tracking-wider text-brand-neutral/80 mt-2">
                    {t('common:paymentDueDate')}: {formattedDate}
                  </p>
                )}

                {/* Montos por cada plan (si existen) */}
                {pricingOptions && pricingOptions.length > 0 && (
                  <div className="mt-4 rounded-lg border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-wider text-brand-neutral/70 mb-2">
                      {t('common:pricesFrom')}
                    </p>

                    <ul className="space-y-2">
                      {pricingOptions.map((opt) => {
                        const computedAmount =
                          installment.amount ??
                          (installment.percentage
                            ? Math.round(
                                opt.price * (installment.percentage / 100)
                              )
                            : undefined);

                        return (
                          <li
                            key={opt.id}
                            className="flex items-center justify-between gap-4 text-sm"
                          >
                            <span className="text-brand-neutral/90 font-semibold">
                              {t(opt.nameKey)}
                            </span>
                            <span className="text-white font-bold">
                              {computedAmount !== undefined
                                ? formatMoney(computedAmount, opt.currency)
                                : '—'}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </MotionBlock>
            );
          })}
        </MotionBlock>

        {paymentMethodContent.methods.length > 0 && (
          <MotionBlock
            kind="inView"
            variants={fadeIn()}
            className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h3 className="heading-6 text-white mb-4">
              {t(paymentMethodContent.titleKey)}
            </h3>

            <ul className="grid gap-4 sm:grid-cols-2">
              {paymentMethodContent.methods.map((m) => (
                <li
                  key={m.id}
                  className="flex items-start gap-3 rounded-xl bg-white/5 p-4 ring-1 ring-white/10"
                >
                  <IconBadge kind={m.icon} />
                  <div>
                    <p className="font-semibold text-white">{t(m.nameKey)}</p>
                    <p className="text-base-xs text-brand-neutral/85">
                      {t(m.descriptionKey)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </MotionBlock>
        )}
      </div>
    </section>
  );
};
