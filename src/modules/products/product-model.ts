import { model, Schema } from "mongoose";
import { TProduct } from "./product-interface";

const ProductSchema = new Schema<TProduct>(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    images: {
      type: [String],
      default: [],
      required: true,
    },
    stock: {
      type: Number,
      required: true,
      default: 3,
    },
    quantity: {
      type: Number,
      trim: true,
      required: true,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

export const ProductModel = model<TProduct>("Product", ProductSchema);
