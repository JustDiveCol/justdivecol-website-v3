import {
  PaymentMethodsContentSchema,
  type PaymentMethodsContent,
} from './types';

const rawPaymentMethods: PaymentMethodsContent = {
  titleKey: 'payments.title',
  methods: [
    {
      id: 'link',
      nameKey: 'payments.methods.link.name',
      descriptionKey: 'payments.methods.link.desc',
      icon: 'link',
    },
    {
      id: 'transfer',
      nameKey: 'payments.methods.transfer.name',
      descriptionKey: 'payments.methods.transfer.desc',
      icon: 'bank',
    },
    {
      id: 'card',
      nameKey: 'payments.methods.card.name',
      descriptionKey: 'payments.methods.card.desc',
      icon: 'card',
    },
    {
      id: 'cash',
      nameKey: 'payments.methods.cash.name',
      descriptionKey: 'payments.methods.cash.desc',
      icon: 'cash',
    },
    {
      id: 'qr',
      nameKey: 'payments.methods.qr.name',
      descriptionKey: 'payments.methods.qr.desc',
      icon: 'qr',
    },
  ],
};

export const paymentMethodContent =
  PaymentMethodsContentSchema.parse(rawPaymentMethods);
