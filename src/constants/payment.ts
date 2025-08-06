// src/constants/paymentMethods.ts

/**
 * Definición de métodos de pago para la aplicación.
 * - titleKey: clave de i18n para el título de la sección.
 * - methods: lista de métodos de pago disponibles.
 */
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

// Tipos derivados automáticamente
/** Estructura completa de PAYMENT_METHODS */
export type PaymentMethodsData = typeof PAYMENT_METHODS;

/** Tipo de cada método individual */
export type PaymentMethod = (typeof PAYMENT_METHODS.methods)[number];

/** Identificador de método de pago ('link' | 'transfer') */
export type PaymentMethodId = PaymentMethod['id'];

/** Clave de i18n para el nombre del método */
export type PaymentMethodNameKey = PaymentMethod['nameKey'];

/** Clave de i18n para la descripción del método */
export type PaymentMethodDescriptionKey = PaymentMethod['descriptionKey'];

/** Icono asociado al método de pago */
export type PaymentMethodIcon = PaymentMethod['icon'];

/**
 * Helper para obtener un método de pago por su ID.
 * @param id - Identificador del método de pago
 * @returns El método correspondiente o undefined si no existe
 */
export function getPaymentMethodById(
  id: PaymentMethodId
): PaymentMethod | undefined {
  return PAYMENT_METHODS.methods.find((m) => m.id === id);
}
