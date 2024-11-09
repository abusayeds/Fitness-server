import { z } from "zod";

const categoryProductValidationSchema = z.object({
  body: z.object({
    mainCategory: z.string(),
    category1: z.string(),
    category2: z.string(),
    category3: z.string(),
    category4: z.string(),
    category5: z.string(),
    category6: z.string(),
    images: z.array(z.string()).default([]),
  }),
});
export const CategoryValidation = {
  categoryProductValidationSchema,
};
