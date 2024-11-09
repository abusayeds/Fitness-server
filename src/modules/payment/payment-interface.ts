export type TPayment = {
  address: string;
  city: string;
  deliveryOption: "Pick up" | "Delivery";
  email: string;
  fullName: string;
  phoneNumber: string;
  state: string;
  terms: boolean;
  totalItem: number;
  totalPrice: number;
};
