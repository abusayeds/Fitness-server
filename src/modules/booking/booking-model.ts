import { Schema, model } from "mongoose";
import { TBooking } from "./booking-interface";

const bookingSchema = new Schema<TBooking>(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: [true, "User id is required"],
      ref: "User",
    },
    productId: {
      type: Schema.Types.ObjectId,
      required: [true, "Product id is required"],
      ref: "Product",
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

export const bookingModel = model<TBooking>("Booking", bookingSchema);
