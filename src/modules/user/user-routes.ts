import express from "express";
import requestValidation from "../../app/middwares/validation-request";
import { userValidation } from "./user-validation";
import { userController } from "./user-controller";
import { authValidation } from "../auth/auth-validation";
import { authController } from "../auth/auth-controller";

const router = express.Router();
router.post(
  "/signup",
  requestValidation(userValidation.createUserValidationSchema),
  userController.createUser
);
router.post(
  "/login",
  requestValidation(authValidation.createAuthValidationSchema),
  authController.createAuth
);
router.get("/all-user", userController.getAllUser);
router.delete(
  "/delete-user/:id",

  userController.deleteUser
);
// router.put(
//   "/change-password",
//   requestValidation(userValidation.changePasswordValidationSchema),
//   authController.changePassword
// );

export const userRoutes = router;
