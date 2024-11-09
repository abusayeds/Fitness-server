import { Router } from "express";
import { bookingController } from "./booking-controller";

import { USER_ROLE } from "../user/user.constant";
import requestValidation from "../../app/middwares/validation-request";
import { bookingValidation } from "./booking-validation";
import auth from "../../app/middwares/auth";

const router = Router();

router.post(
  "/bookings",
  auth(USER_ROLE.user),
  requestValidation(bookingValidation.bookingVAlidationSchema),
  bookingController.createbooking
);
router.put(
  "/update-quantity/:id/:quantity",
  auth(USER_ROLE.user),
  bookingController.updateQuantity
);
router.get("/bookings", auth(USER_ROLE.admin), bookingController.getAllBooking);
router.get(
  "/my-bookings",
  auth(USER_ROLE.user),
  bookingController.getMyBooking
);
router.delete(
  "/delete-booking/:id",
  auth(USER_ROLE.user),
  bookingController.deleteBooking
);

export const bookingRouts = router;
