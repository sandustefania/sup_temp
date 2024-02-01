import { Router } from "express";
import { sample_foods, sample_tags } from "../data";
import expressAsyncHandler from "express-async-handler";
import { FoodModel } from "../models/food.model";

const router = Router();

//seed data to database
router.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    const foodsCount = await FoodModel.countDocuments();
    if (foodsCount > 0) {
      res.send("Seed is already done");
      return;
    }

    await FoodModel.create(sample_foods);
    res.send("Seed is Done!");
  })
);

//getAllFood
router.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const foods = await FoodModel.find(); //luam din DB
    res.send(foods);
  })
);
//fara DB, cu data.ts local
// app.get("/api/foods", (req, res) => {
//   res.send(sample_foods);
// });

// getAllFoodsBySearchTerm
router.get(
  "/search/:searchTerm",
  expressAsyncHandler(async (req, res) => {
    const searchRegex = new RegExp(req.params.searchTerm, "i");
    const foods = await FoodModel.find({ name: { $regex: searchRegex } });
    res.send(foods);
  })
);
//vechea varianta
// const searchTerm = req.params.searchTerm;
// const foods = sample_foods.filter((food) =>
//   food.name.toLowerCase().includes(searchTerm.toLowerCase())
// );
// res.send(foods);

//getAllTags
router.get(
  "/tags",
  expressAsyncHandler(async (req, res) => {
    const tags = await FoodModel.aggregate([
      {
        //2 foods 3 tags, unwind tags=>6 foods tags 1
        $unwind: "$tags",
      },
      {
        $group: {
          _id: "$tags",
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          name: "$_id",
          count: "$count",
        },
      },
    ]).sort({ count: -1 });

    const all = {
      name: "All",
      count: await FoodModel.countDocuments(),
    };

    tags.unshift(all);
    res.send(tags);
  })
);
//varianta veche
// router.get("/tags", (req, res) => {
//   res.send(sample_tags);
// });

//getAllFoodsByTag
router.get(
  "/tag/:tagName",
  expressAsyncHandler(async (req, res) => {
    const foods = await FoodModel.find({ tags: req.params.tagName });
    res.send(foods);
  })
);
//vechea varianta
// router.get("/tag/:tagName", (req, res) => {
//   const tagName = req.params.tagName;
//   const foods = sample_foods.filter((food) => food.tags?.includes(tagName));
//   res.send(foods);
// });

//getFoodById
router.get(
  "/:foodId",
  expressAsyncHandler(async (req, res) => {
    const food = await FoodModel.findById(req.params.foodId);
    res.send(food);
  })
);

//vechea varianta
// router.get("/:foodId", (req, res) => {
//   const foodId = req.params.foodId;
//   const food = sample_foods.find((food) => food.id == foodId);
//   res.send(food);
// });

export default router;
