import { model, Schema } from "mongoose";
import { Tcategory } from "./category-product-interface";

const categorySchema = new Schema<Tcategory>(
    {
        category : String,
        images : String
    }
)
export const categoryModel = model<Tcategory>('category-product', categorySchema)