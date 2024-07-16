import { z } from 'zod';

const createProductValidationSchema = z.object({
    body:z.object({
        name: z.string(),
        price: z.number(),
        stock: z.number(),
        quantity: z.number(),
        description: z.string(),
        images: z.string(),
        category: z.string()
      })
})
const udateProductValidationSchema = z.object({
    body:z.object({
        name: z.string().optional(),
        price: z.number().optional(),
        stock: z.number().optional(),
        quantity: z.number().optional(),
        description: z.string().optional(),
        images: z.string().optional(),
        category: z.string().optional()
      })
})
   export const ProductValidation = {
    createProductValidationSchema,
    udateProductValidationSchema
  }


const categoryProductValidationSchema = z.object({
    body:z.object({
        name: z.string(),
       category: z.string()
      })
})
   export const CategoryValidation = {
    categoryProductValidationSchema
  }