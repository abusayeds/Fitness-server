import { z } from "zod";

const createProductValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, { message: "Name is required." }), // Required
    price: z.number().positive({ message: "Price must be a positive number." }), // Required, must be positive
    category: z.string().min(1, { message: "Category is required." }), // Required
    stock: z
      .number()
      .nonnegative({ message: "Stock must be a non-negative number." }), // Required, must be non-negative
    quantity: z.number().default(1), // Optional, defaults to 0
    description: z.string().min(1, { message: "Description is required." }), // Required
    images: z
      .array(z.string().url()) // Ensures each item is a valid URL
      .nonempty({ message: "At least one image URL is required." }),
  }),
});
const udateProductValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    price: z.number().optional(),
    stock: z.number().optional(),
    quantity: z.number().optional(),
    description: z.string().optional(),
    images: z
      .array(z.string().url())
      .nonempty({ message: "At least one image URL is required." }),

    category: z.string().optional(),
  }),
});
export const ProductValidation = {
  createProductValidationSchema,
  udateProductValidationSchema,
};
