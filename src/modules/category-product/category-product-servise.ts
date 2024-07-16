import { Tcategory } from "./category-product-interface";
import { categoryModel } from "./category-product-model";

const createCategoryProductDB = async (payload : Tcategory) => {
  const result = await categoryModel.create(payload)
  return result
}
const getAllCategoryProductDB = async () => {
  const result = await categoryModel.find()
  return result
}

 export const categoryServise = {
    createCategoryProductDB,
    getAllCategoryProductDB
}