import { model, Schema, Types } from "mongoose";
import { Food } from "./food.model";
import { FoodSchema } from "./food.model";
import { OrderStatusEnum } from "../constants/order_status";

export interface OrderItem {
  food: Food;
  price: number;
  quantity: number;
}

export const OrderItemSchema = new Schema<OrderItem>({
  food: { type: FoodSchema, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

export interface Order {
  id: string;
  items: OrderItem[];
  totalPrice: number;
  name: string;
  phone: string;
  paymentId: string;
  status: OrderStatusEnum;
  user: Types.ObjectId; //foreign key, for just the id
  createdAt: Date;
  updatedAt: Date;
}

const orderSchema = new Schema<Order>(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    paymentId: { type: String },
    totalPrice: { type: Number, required: true },
    items: { type: [OrderItemSchema], required: true },
    status: { type: String, default: OrderStatusEnum.NEW },
    user: { type: Schema.Types.ObjectId, required: true },
  },
  {
    timestamps: true, //createdAt, updatedAt will be created automatically,
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true, //id -->_id
    },
  }
);

export const OrderModel = model("order", orderSchema);
