import { Router } from "express";
import { paymentController } from "./payment-controller";

const router = Router();
router.post("/create-payment", paymentController.createPayment);
router.post("/confirmation", paymentController.confirmationController);
router.post("/failed", paymentController.failedController);
router.get("/all-payment", paymentController.getAllPayment);
router.delete("/delete-payment/:id", paymentController.deletePayment);
export const paymentRoutes = router;
