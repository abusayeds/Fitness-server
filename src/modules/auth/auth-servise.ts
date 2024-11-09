import httpStatus from "http-status";
import appError from "../../app/middwares/appError";
import { userModel } from "../user/user-model";
import { TLoginUser } from "./auth-interface";
import bcrypt from "bcrypt";

import { createToken } from "./auth-utils";
import config from "../../app/config";

const createAuthDB = async (payload: TLoginUser) => {
  const user = await userModel.isUserExistsByCustomEmail(payload?.email);

  if (!user) {
    throw new appError(httpStatus.NOT_FOUND, "This user is not found  ! ");
  }

  // check the password
  if (!(await userModel.isPasswordMatched(payload?.password, user?.password))) {
    throw new appError(httpStatus.FORBIDDEN, "This pasword do not match ");
  }

  const jwtPayload = {
    id: user._id,
    name: user.name,
    userEmail: user.email,
    role: user.role,
    user: user,
  };
  const accessToken = createToken(
    jwtPayload,
    (config.jwt_access_secret as string) || "14",
    (config.jwt_refresh_expires_in as string) || "30d"
  );

  const refreshToken = createToken(
    jwtPayload,
    (config.jwt_access_secret as string) || "14",
    (config.jwt_refresh_expires_in as string) || "30d"
  );

  return {
    accessToken,
    refreshToken,
    user,
  };
};
const changePasswordDB = async (payload: {
  email: string;
  newPassword: string;
  oldPassword: string;
}) => {
  const user = await userModel.findOne({ email: payload.email });

  if (!user) {
    throw new appError(httpStatus.NOT_FOUND, "This user is not found  ! ");
  }

  // check the password
  if (
    !(await userModel.isPasswordMatched(payload.oldPassword, user.password))
  ) {
    throw new appError(httpStatus.FORBIDDEN, "The password does not match.");
  }
  const newHashedPassword = await bcrypt.hash(
    payload.newPassword,
    Number(config.bcrypt_salt_rounds)
  );

  await userModel.findOneAndUpdate(
    { email: payload.email },
    {
      password: newHashedPassword,
      passwordChangedAt: new Date(),
    }
  );
  return null;
};
export const authServise = {
  createAuthDB,
  changePasswordDB,
};
