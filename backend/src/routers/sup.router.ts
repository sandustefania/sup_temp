import { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import { ContactUsModel } from "../models/contactUs.model";
import { ReviewModel } from "../models/review.model";
import { EmailNewsletterModel } from "../models/emailNewsletter.model";
import multer from "multer";
import path from "path";
import { EventModel } from "../models/event.model";
import axios from "axios";
import { RentSupModel } from "../models/rentSups.model";
import { HTTP_BAD_REQUEST } from "../constants/http_status";

const router = Router();

router.get("/weather", async (req, res) => {
  try {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Iasi&appid=b993d6e9316969e06980ea5c8dd76d80&units=metric`;
    const response = await axios.get(apiUrl);
    res.json(response.data);
  } catch (error) {
    console.error(`Error fetching weather data`);
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});


router.post(
  "/addMessage",
  expressAsyncHandler(async (req, res) => {
    const { name, email, message } = req.body;
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
