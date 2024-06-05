import { Schema, model } from "mongoose";

export interface RentSup {
  numberSups: number;
  selectedDate: Date;
  userName: string;
  userEmail: string;
  userPhone: string;
}

const rentSupSchema = new Schema<RentSup>(
  {
    numberSups: { type: Number, required: true },
    selectedDate: { type: Date, required: true },
    userName: { type: String, required: true },
    userEmail: { type: String, required: true },
    userPhone: { type: String, required: true },
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
export const RentSupModel = model<RentSup>("rentSup", rentSupSchema);
