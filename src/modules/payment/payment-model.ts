import { Schema, model } from "mongoose";
import { TPayment } from "./payment-interface";

const PaymentSchema = new Schema<TPayment>(
  {
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    deliveryOption: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    terms: {
      type: Boolean,
      required: true,
    },
    totalItem: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const paymentModel = model<TPayment>("Payment", PaymentSchema);
