"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactUsModel = void 0;
var mongoose_1 = require("mongoose");
var contactUsSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
}, {
    timestamps: true, //createdAt, updatedAt will be created automatically,
    toJSON: {
        virtuals: true,
    },
    toObject: {
        virtuals: true, //id -->_id
    },
});
exports.ContactUsModel = (0, mongoose_1.model)("contactUs", contactUsSchema);
