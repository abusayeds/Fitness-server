import httpStatus from "http-status";
import sendResponse from "../../app/middwares/responseHendel";
import catchAsync from "../../app/utils/catechAsync-funtion";
import { categoryServise } from "./category-product-servise";

const createCategoryProduct = catchAsync(async (req, res) => {
    const result = await categoryServise.createCategoryProductDB(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Category  retrieved successfully ",
      data: result,
    });
  });
const getAllCategoryProduct = catchAsync(async (req, res) => {
    const result = await categoryServise.getAllCategoryProductDB()
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: " Get all Category  retrieved successfully ",
      data: result,
    });
  });
 
  export const categoryController = {
    createCategoryProduct,
    getAllCategoryProduct
  }