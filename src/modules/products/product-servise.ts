import queryBuilder from "../../app/builder/queryBuilder";
import { productSearchableFields } from "./product-constant";
import { TProduct } from "./product-interface";
import { ProductModel } from "./product-model";

const createProductDB = async (payload: TProduct) => {
  const result = await ProductModel.create(payload);
  return result;
};

const getAllProductDB = async (query: Record<string, unknown>) => {
  const ProductQuery = new queryBuilder(ProductModel.find(), query)
    .search(productSearchableFields)
    .fillter()
    .sort()
    .pagenate()
    .fields();

  const result = await ProductQuery.modelQuery;

  return result;
};
const getSingleProductDB = async (id: string) => {
  const result = await ProductModel.findById(id);
  return result;
};
const deleteProductDB = async (id: string) => {
  const result = await ProductModel.findByIdAndDelete(id);
  return result;
};
const UpdateProductDB = async (id: string, payload: Partial<TProduct>) => {
  const result = await ProductModel.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const productServise = {
  createProductDB,
  getAllProductDB,
  getSingleProductDB,
  UpdateProductDB,
  deleteProductDB,
};
