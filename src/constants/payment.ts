// src/constants/paymentMethods.ts

export const PAYMENT_METHODS = {
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

export type PaymentMethodsData = typeof PAYMENT_METHODS;

export type PaymentMethod = (typeof PAYMENT_METHODS.methods)[number];

export type PaymentMethodId = PaymentMethod['id'];

export type PaymentMethodNameKey = PaymentMethod['nameKey'];

export type PaymentMethodDescriptionKey = PaymentMethod['descriptionKey'];

export type PaymentMethodIcon = PaymentMethod['icon'];

export function getPaymentMethodById(
  id: PaymentMethodId
): PaymentMethod | undefined {
  return PAYMENT_METHODS.methods.find((m) => m.id === id);
}
