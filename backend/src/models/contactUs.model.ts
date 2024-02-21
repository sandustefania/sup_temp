import { Schema, model } from "mongoose";

export interface ContactUs {
  name: string;
  email: string;
  message: string;
}

const contactUsSchema = new Schema<ContactUs>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
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

export const ContactUsModel = model<ContactUs>("contactUs", contactUsSchema);
