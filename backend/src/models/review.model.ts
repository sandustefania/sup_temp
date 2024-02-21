import { Schema, model } from "mongoose";

export interface Review {
  name: string;
  email: string;
  review: string;
  rating: number;
}

const reviewSchema = new Schema<Review>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    review: { type: String, required: true },
    rating: { type: Number, required: true },
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

export const ReviewModel = model<Review>("review", reviewSchema);
