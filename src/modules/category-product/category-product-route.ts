import express from "express";
import requestValidation from "../../app/middwares/validation-request";
import { CategoryValidation } from "../product-validation";
import { categoryController } from "./category-product-controller";
const router = express.Router();
router.post(
  "/create-category",
  requestValidation(CategoryValidation.categoryProductValidationSchema),
  categoryController.createCategoryProduct
);
router.get("/get-category", categoryController.getAllCategoryProduct);

export const categoryRoutes = router;
