import queryBuilder from "../../app/builder/queryBuilder";
import { Tcategory } from "./category-product-interface";
import { categoryModel } from "./category-product-model";

const createCategoryProductDB = async (payload: Tcategory) => {
  const result = await categoryModel.create(payload);
  return result;
};

const getAllCategoryProductDB = async (query: Record<string, unknown>) => {
  const ProductQuery = new queryBuilder(categoryModel.find(), query)
    .fillter()
    .sort()
    .pagenate()
    .fields();

  const result = await ProductQuery.modelQuery;
  return result;
};

export const categoryServise = {
  createCategoryProductDB,
  getAllCategoryProductDB,
};
