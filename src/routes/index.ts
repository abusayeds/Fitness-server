import { Router } from "express";

import { categoryRoutes } from "../modules/category-product/category-product-route";
import { ProductsRoutes } from "../modules/products/product-route";
import { userRoutes } from "../modules/user/user-routes";
import { bookingRouts } from "../modules/booking/booking-routes";
import { paymentRoutes } from "../modules/payment/payment-route";

const router = Router();
router.use("/products", ProductsRoutes);
router.use("/category", categoryRoutes);
router.use("/auth", userRoutes);
router.use("/cart", bookingRouts);
router.use("/payment", paymentRoutes);
export default router;
