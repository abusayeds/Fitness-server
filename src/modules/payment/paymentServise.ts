import { TPayment } from "./payment-interface";
import { paymentModel } from "./payment-model";
import { initiatePayment, verifyPayment } from "./payment.utils";

const createPaymentDB = async (payload: TPayment) => {
  const transactionId = `TNX-${Date.now()}`;
  const result = await paymentModel.create(payload);
  const paymentData = {
    transactionId,
    totalPrice: Number(payload?.totalPrice),
    custormerName: payload?.fullName,
    custormerEmail: payload?.email,
    custormerPhone: payload?.phoneNumber,
    custormerAddress: payload?.address,
  };
  const paymentSession = await initiatePayment(paymentData);
  return {
    result,
    paymentSession,
  };
};
const getAllPaymentDB = async () => {
  const result = await paymentModel.find();
  return result;
};
const deletePaymentDB = async (id: string) => {
  const result = await paymentModel.findByIdAndDelete(id);
  return result;
};
const confirmationService = async (transactionId: string) => {
  const verifyPaymentMethod = await verifyPayment(transactionId);
  let result;
  if (verifyPaymentMethod && verifyPaymentMethod.pay_status === "Successfull") {
    return result;
  }
};

export const paymentSerice = {
  confirmationService,
  createPaymentDB,
  getAllPaymentDB,
  deletePaymentDB,
};
