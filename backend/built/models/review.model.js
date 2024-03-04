"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewModel = void 0;
var mongoose_1 = require("mongoose");
var reviewSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    review: { type: String, required: true },
    rating: { type: Number, required: true },
}, {
    timestamps: true, //createdAt, updatedAt will be created automatically,
    toJSON: {
        virtuals: true,
    },
    toObject: {
        virtuals: true, //id -->_id
    },
});
exports.ReviewModel = (0, mongoose_1.model)("review", reviewSchema);
