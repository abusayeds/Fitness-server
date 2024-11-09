/* eslint-disable @typescript-eslint/no-explicit-any */

// import { initiatePayment } from "../payment/payment.utils";

import httpStatus from "http-status";
import appError from "../../app/middwares/appError";
import { TBooking } from "./booking-interface";
import { bookingModel } from "./booking-model";

import { ProductModel } from "../products/product-model";

const createBookingDB = async (payload: TBooking, userId: string) => {
  const existsProduct = await bookingModel.find({
    productId: payload?.productId,
  });
  if (existsProduct.length > 0) {
    throw new appError(
      httpStatus.BAD_GATEWAY,
      "Product allrady added, incress your Quantity"
    );
  }
  const product: any = await ProductModel.findById(payload?.productId);
  //   const transactionId = `TNX-${Date.now()}`;
  const result = await bookingModel.create({
    ...payload,
    price: product?.price,
    user: userId,
  });
  //   const paymentData = {
  //     slotId: payload.slotId,
  //     transactionId,
  //     totalPrice: Number(payload?.price),
  //     custormerName: payload?.name,
  //     custormerEmail: payload?.email,
  //     custormerPhone: payload?.phone,
  //     custormerAddress: payload?.address,
  //   };
  //   const paymentSession = await initiatePayment(paymentData);
  return {
    result,
    // paymentSession,
  };
};
const getAllBookingDB = async () => {
  const result = await bookingModel
    .find()
    .populate("user")
    .populate("productId");
  return result;
};
const deleteBookingDB = async (id: string) => {
  const result = await bookingModel.findByIdAndDelete(id);
  return result;
};
const updateQuantityDB = async (id: string, quantity: any) => {
  const result = await bookingModel.findByIdAndUpdate(
    id,
    { $inc: { quantity: quantity } },
    { new: true }
  );
  return result;
};

const getMybookingDB = async (id: string) => {
  const result = await bookingModel
    .find({ user: id })
    .populate("productId")
    .populate("user");
  return result;
};
export const bookingService = {
  createBookingDB,
  getAllBookingDB,
  getMybookingDB,
  deleteBookingDB,
  updateQuantityDB,
};
