import { Schema, model } from "mongoose";

export interface RentSup {
  numberSups: string;
  selectedDate: Date;
}

const rentSupSchema = new Schema<RentSup>(
  {
    numberSups: { type: String, required: true },
    selectedDate: { type: Date, required: true },
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
