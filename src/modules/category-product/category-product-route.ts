import express from "express";

import { categoryController } from "./category-product-controller";
import requestValidation from "../../app/middwares/validation-request";
import { CategoryValidation } from "./category-product-validation";
const router = express.Router();
router.post(
  "/create-category",
  requestValidation(CategoryValidation.categoryProductValidationSchema),
  categoryController.createCategoryProduct
);
router.get("/get-category", categoryController.getAllCategoryProduct);

export const categoryRoutes = router;
