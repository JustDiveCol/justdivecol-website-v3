// src/constants/payment.schema.ts
import { z } from 'zod';

export const PAYMENT_METHODS_RAW = {
  titleKey: 'paymentTitle',
  methods: [
    {
      id: 'link',
      nameKey: 'paymentMethod1Name',
      descriptionKey: 'paymentMethod1Desc',
      icon: 'link',
    },
    {
      id: 'transfer',
      nameKey: 'paymentMethod2Name',
      descriptionKey: 'paymentMethod2Desc',
      icon: 'bank',
    },
  ],
} as const;

const METHOD_ID_VALUES = PAYMENT_METHODS_RAW.methods.map((m) => m.id);
const ICON_VALUES = PAYMENT_METHODS_RAW.methods.map((m) => m.icon);

export const PaymentMethodIdSchema = z.enum(
  METHOD_ID_VALUES as [
    (typeof METHOD_ID_VALUES)[number],
    ...(typeof METHOD_ID_VALUES)[number][]
  ]
);
export const PaymentMethodIconSchema = z.enum(
  ICON_VALUES as [
    (typeof ICON_VALUES)[number],
    ...(typeof ICON_VALUES)[number][]
  ]
);

export const PaymentMethodSchema = z.object({
  id: PaymentMethodIdSchema,
  nameKey: z.string().min(1),
  descriptionKey: z.string().min(1),
  icon: PaymentMethodIconSchema,
});

export const PaymentMethodsSchema = z.object({
  titleKey: z.string().min(1),
  methods: z.array(PaymentMethodSchema).min(1),
});

export type PaymentMethodId = z.infer<typeof PaymentMethodIdSchema>;
export type PaymentMethodIcon = z.infer<typeof PaymentMethodIconSchema>;
export type PaymentMethod = z.infer<typeof PaymentMethodSchema>;
export type PaymentMethods = z.infer<typeof PaymentMethodsSchema>;

export const PAYMENT_METHODS_SAFE =
  PaymentMethodsSchema.parse(PAYMENT_METHODS_RAW);

export const toPaymentMethodId = (v: unknown): PaymentMethodId =>
  PaymentMethodIdSchema.parse(v);
export const toPaymentMethodIcon = (v: unknown): PaymentMethodIcon =>
  PaymentMethodIconSchema.parse(v);

export function getPaymentMethodById(
  id: PaymentMethodId
): PaymentMethod | undefined {
  return PAYMENT_METHODS_SAFE.methods.find((m) => m.id === id);
}
