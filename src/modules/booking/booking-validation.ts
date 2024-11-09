import { z } from "zod";

const bookingVAlidationSchema = z.object({
  body: z.object({
    productId: z.string(),
  }),
});

export const bookingValidation = {
  bookingVAlidationSchema,
};
