import httpStatus from "http-status";
import sendResponse from "../app/middwares/responseHendel";
import { productServise } from "./product-servise";
import catchAsync from "../app/utils/catechAsync-funtion";


const createProduct = catchAsync(async (req, res) => {
    const result = await productServise.createProductDB(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Product retrieved successfully ",
      data: result,
    });
  });
const getAllProduct = catchAsync(async (req, res) => {
    const result = await productServise.getAllProductDB(req.query)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Product retrieved successfully ",
      data: result,
    });
  });
const getSingleProduct = catchAsync(async (req, res) => {
    const {id} = req.params
    const result = await productServise.getSingleProductDB(id)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Single product retrieved successfully ",
      data: result,
    });
  });
const deleteProduct = catchAsync(async (req, res) => {
    const {id} = req.params
    const result = await productServise.deleteProductDB(id)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: " Deleted product  successfully ",
      data: result,
    });
  });

const UpdateProduct = catchAsync(async (req, res) => {
    const {id} = req.params
    const result = await productServise.UpdateProductDB(id,req.body)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "update product  successfully ",
      data: result,
    });
  });

export const ProductController = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  UpdateProduct,
  deleteProduct
};


