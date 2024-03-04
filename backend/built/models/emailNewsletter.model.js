"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailNewsletterModel = void 0;
var mongoose_1 = require("mongoose");
var emailNewsletterSchema = new mongoose_1.Schema({
    email: { type: String, required: true },
}, {
    timestamps: true, //createdAt, updatedAt will be created automatically,
    toJSON: {
        virtuals: true,
    },
    toObject: {
        virtuals: true, //id -->_id
    },
});
exports.EmailNewsletterModel = (0, mongoose_1.model)("emailNewsletter", emailNewsletterSchema);
