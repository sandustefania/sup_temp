import { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import { ContactUsModel } from "../models/contactUs.model";
import { ReviewModel } from "../models/review.model";
import { EmailNewsletterModel } from "../models/emailNewsletter.model";

const router = Router();

router.post(
  "/addMessage",
  expressAsyncHandler(async (req, res) => {
    const { name, email, message } = req.body;

    // await ContactUsModel.create(message);
    const addMessage = new ContactUsModel({ name, email, message });
    await addMessage.save();
    res.send(addMessage);
  })
);

router.get(
  "/getMessages",
  expressAsyncHandler(async (req, res) => {
    const messages = await ContactUsModel.find();
    res.send(messages);
  })
);

router.post(
  "/addReview",
  expressAsyncHandler(async (req, res) => {
    const { name, email, review, rating } = req.body;
    const addReview = new ReviewModel({ name, email, review, rating });
    await addReview.save();
    res.send(addReview);
  })
);

router.get(
  "/getReviews",
  expressAsyncHandler(async (req, res) => {
    const reviews = await ReviewModel.find();
    res.send(reviews);
  })
);

router.post(
  "/addEmailNewsletter",
  expressAsyncHandler(async (req, res) => {
    const { email } = req.body;
    const addEmailNewsletter = new EmailNewsletterModel({ email });
    await addEmailNewsletter.save();
    res.send(addEmailNewsletter);
  })
);

router.get(
  "/getEmailNewsletter",
  expressAsyncHandler(async (req, res) => {
    const emails = await EmailNewsletterModel.find();
    res.send(emails);
  })
);

export default router;
