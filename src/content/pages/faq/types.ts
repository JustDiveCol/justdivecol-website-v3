// src/content/pages/faq/types.ts
import { z } from 'zod';
import { SEOPropsSchema } from '../../../components/common/types';
import { PageHeaderPropsSchema } from '../../../components/sections/shared/types';

// Item (pregunta/respuesta)
export const FaqItemSchema = z.object({
  id: z.string().min(1),
  questionKey: z.string().min(1),
  answerKey: z.string().min(1),
});
export type FaqItem = z.infer<typeof FaqItemSchema>;

// Categoría
export const FaqCategorySchema = z.object({
  id: z.string().min(1),
  sectionTitleKey: z.string().min(1),
  faqs: z.array(FaqItemSchema).min(1).readonly(),
});
export type FaqCategory = z.infer<typeof FaqCategorySchema>;

// Data completa de FAQ
export const FaqDataSchema = z
  .object({
    topFaqIds: z.array(z.string().min(1)).readonly(),
    categories: z.array(FaqCategorySchema).min(1).readonly(),
  })
  .superRefine((val, ctx) => {
    const allIds = new Set(
      val.categories.flatMap((c) => c.faqs.map((f) => f.id))
    );
    for (const id of val.topFaqIds) {
      if (!allIds.has(id)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `topFaqIds contiene un id inexistente: "${id}"`,
          path: ['topFaqIds'],
        });
      }
    }
  });
export type FaqData = z.infer<typeof FaqDataSchema>;

// Página FAQ
export const FaqPageContentSchema = z.object({
  seo: SEOPropsSchema,
  header: PageHeaderPropsSchema,
  data: FaqDataSchema,
});
export type FaqPageContent = z.infer<typeof FaqPageContentSchema>;
