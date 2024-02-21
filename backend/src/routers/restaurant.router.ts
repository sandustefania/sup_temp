import { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import { ContactUsModel } from "../models/contactUs.model";

const router = Router();

router.post(
  "/contactUs",
  expressAsyncHandler(async (req, res) => {
    const { name, email, message } = req.body;

    // await ContactUsModel.create(message);
    const contactUs = new ContactUsModel({ name, email, message });
    await contactUs.save();
    res.send(contactUs);
  })
);

export default router;
