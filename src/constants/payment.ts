// src/constants/paymentMethods.ts
import { z } from 'zod';

/** ---------------------------
 *  Datos base (const)
 * --------------------------- */
const PAYMENT_METHODS = {
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

/** ---------------------------
 *  Tipos derivados del objeto
 * --------------------------- */
export type PaymentMethodsData = typeof PAYMENT_METHODS;
export type PaymentMethod = (typeof PAYMENT_METHODS.methods)[number];
export type PaymentMethodId = PaymentMethod['id'];
export type PaymentMethodNameKey = PaymentMethod['nameKey'];
export type PaymentMethodDescriptionKey = PaymentMethod['descriptionKey'];
export type PaymentMethodIcon = PaymentMethod['icon'];

/** ---------------------------
 *  Schemas (Zod)
 *  - Enums derivados de los valores actuales
 * --------------------------- */
const METHOD_ID_VALUES = PAYMENT_METHODS.methods.map((m) => m.id);
export const PaymentMethodIdSchema = z.enum(
  METHOD_ID_VALUES as [PaymentMethodId, ...PaymentMethodId[]]
);

const ICON_VALUES = PAYMENT_METHODS.methods.map((m) => m.icon);
export const PaymentMethodIconSchema = z.enum(
  ICON_VALUES as [PaymentMethodIcon, ...PaymentMethodIcon[]]
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

export type PaymentMethodSchemaType = z.infer<typeof PaymentMethodSchema>;
export type PaymentMethodsSchemaType = z.infer<typeof PaymentMethodsSchema>;

/** ---------------------------
 *  (Opcional) Validación runtime del objeto estático
 *  Útil si en el futuro estos datos vienen de CMS/JSON
 * --------------------------- */
export const PAYMENT_METHODS_SAFE = PaymentMethodsSchema.parse(PAYMENT_METHODS);

/** ---------------------------
 *  Helper
 * --------------------------- */
export function getPaymentMethodById(
  id: PaymentMethodId
): PaymentMethod | undefined {
  return PAYMENT_METHODS.methods.find((m) => m.id === id);
}
