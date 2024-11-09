import { z } from "zod";

const createPaymentValidation = z.object({
  body: z.object({
    address: z.string().min(1, "Address is required"),
    city: z.string().min(1, "City is required"),
    deliveryOption: z.enum(["Pick up", "Delivery"], {
      errorMap: () => ({ message: "Invalid delivery option" }),
    }),
    email: z.string().email("Invalid email format"),
    fullName: z.string().min(1, "Full name is required"),
    phoneNumber: z
      .string()
      .min(10, "Phone number must be at least 10 characters")
      .max(15, "Phone number cannot exceed 15 characters"),
    state: z.string().min(1, "State is required"),
    terms: z.boolean().refine((val) => val === true, {
      message: "You must accept the terms",
    }),
    totalItem: z.number().min(1, "Total items must be at least 1"),
    totalPrice: z.number().min(0, "Total price must be at least 0"),
  }),
});

export const pamentValidation = {
  createPaymentValidation,
};
