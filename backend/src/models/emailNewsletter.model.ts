import { Schema, model } from "mongoose";

export interface EmailNewsletter {
  email: string;
}
const emailNewsletterSchema = new Schema<EmailNewsletter>(
  {
    email: { type: String, required: true },
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

export const EmailNewsletterModel = model<EmailNewsletter>(
  "emailNewsletter",
  emailNewsletterSchema
);
