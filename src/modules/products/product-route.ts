import express from "express";
import requestValidation from "../../app/middwares/validation-request";
import { ProductValidation } from "./product-validation";
import { ProductController } from "./product-controller";

const router = express.Router();
router.post(
  "/create-product",
  requestValidation(ProductValidation.createProductValidationSchema),
  ProductController.createProduct
);
router.get("/all-products", ProductController.getAllProduct);
router.get("/:id", ProductController.getSingleProduct);
router.delete("/:id", ProductController.deleteProduct);
router.patch(
  "/update/:id",
  requestValidation(ProductValidation.udateProductValidationSchema),
  ProductController.UpdateProduct
);

export const ProductsRoutes = router;
