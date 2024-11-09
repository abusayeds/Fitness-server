import { model, Schema } from "mongoose";
import { Tcategory } from "./category-product-interface";

const categorySchema = new Schema<Tcategory>({
  mainCategory: {
    type: String,
    required: true,
  },
  category1: {
    type: String,
    required: true,
  },
  category2: {
    type: String,
    required: true,
  },
  category3: {
    type: String,
    required: true,
  },
  category4: {
    type: String,
    required: true,
  },
  category5: {
    type: String,
    required: true,
  },
  category6: {
    type: String,
    required: true,
  },
  category7: {
    type: String,
  },
  category8: {
    type: String,
  },
  category9: {
    type: String,
  },
  category10: {
    type: String,
  },
  category11: {
    type: String,
  },
  category12: {
    type: String,
  },

  images: {
    type: [String],
    required: true,
    default: [],
  },
});
export const categoryModel = model<Tcategory>(
  "category-product",
  categorySchema
);
