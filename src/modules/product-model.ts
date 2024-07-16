import { model, Schema } from "mongoose";
import { TProduct } from "./product-interface";

const ProductSchema = new Schema<TProduct>(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    price: {
      type: Number,
      trim: true,
      required: true,
    },
    stock: {
      type: Number,
      trim: true,
      required: true,
    },
    quantity: {
      type: Number,
      trim: true,
      required: true,
    },
    description : {
      type: String,
      trim: true,
     
    },
    images: {
      type: String,
      trim: true,
    //   unique :true,
      required: true,
    },
    category: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const ProductModel = model<TProduct>("product", ProductSchema);



