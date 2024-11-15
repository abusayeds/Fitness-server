/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from "axios";
import config from "../../app/config";

export const initiatePayment = async (paymentData: any) => {
  const response = await axios.post(config.payment_url!, {
    store_id: config.store_id,
    signature_key: config.signature_key,
    tran_id: paymentData.transactionId,
    success_url: `https://fitness-server-one.vercel.app/api/v1/payment/confirmation?transactionId=${paymentData.transactionId}`,
    fail_url: "https://fitness-server-one.vercel.app/api/v1/payment/failed",
    cancel_url: "http://localhost:5173",
    amount: paymentData.totalPrice,
    currency: "BDT",
    desc: "Merchant Registration Payment",
    cus_name: paymentData.custormerName,
    cus_email: paymentData.custormerEmail,
    cus_add1: paymentData.custormerAddress,
    cus_add2: "N/A",
    cus_city: "N/A",
    cus_state: "N/A",
    cus_postcode: "N/A",
    cus_country: "N/A",
    cus_phone: paymentData.custormerPhone,
    type: "json",
  });
  return response.data;
};
export const verifyPayment = async (tnxId: string) => {
  const response = await axios.get(config.payment_varify_url!, {
    params: {
      store_id: config.store_id,
      signature_key: config.signature_key,
      type: "json",
      request_id: tnxId,
    },
  });
  return response.data;
};
