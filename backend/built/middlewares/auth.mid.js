"use strict";
// responsible for checking the auth of the user when we do req to an API that is necessary for the user to be authenticated
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_status_1 = require("../constants/http_status");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.default = (function (req, res, next) {
    var token = req.headers.access_token;
    if (!token)
        return res.status(http_status_1.HTTP_UNAUTHORIZED).send();
    try {
        var decodedUser = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        req.user = decodedUser;
    }
    catch (error) {
        res.status(http_status_1.HTTP_UNAUTHORIZED).send();
    }
    return next();
});
