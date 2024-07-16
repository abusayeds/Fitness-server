import { Router } from "express";
import { ProductsRoutes } from "../modules/product-route";
import { categoryRoutes } from "../modules/category-product/category-product-route";

const router = Router()
router.use('/products', ProductsRoutes)
router.use('/category', categoryRoutes)
export default router