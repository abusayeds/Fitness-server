import { Types } from "mongoose";

export type TBooking = {
  user: Types.ObjectId;
  productId: Types.ObjectId;
  price: number;
  quantity: number;
};
