import { Router } from "express";
import { sample_events, sample_tags } from "../data";
import expressAsyncHandler from "express-async-handler";
import { EventModel } from "../models/event.model";

const router = Router();

//seed data to database with a new Item
router.get(
  "/seedNewItem",
  expressAsyncHandler(async (req, res) => {
    const eventsCount = await EventModel.countDocuments();
    // if (eventsCount >0) {
    //   res.send("Seed is already done");
    //   return;
    // }

    await EventModel.create(sample_events);
    res.send("Seed is Done!");
  })
);

//getAllEvent
router.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const events = await EventModel.find(); //luam din DB
    res.send(events);
  })
);

//getEventById
router.get(
  "/:eventId",
  expressAsyncHandler(async (req, res) => {
    const event = await EventModel.findById(req.params.eventId);
    res.send(event);
  })
);

export default router;
