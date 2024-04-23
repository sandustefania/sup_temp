"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// process.env.MONGO_URI; //i have access to .env file
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var food_router_1 = __importDefault(require("./routers/food.router"));
var user_router_1 = __importDefault(require("./routers/user.router"));
var database_config_1 = require("./configs/database.config");
var order_router_1 = __importDefault(require("./routers/order.router"));
var restaurant_router_1 = __importDefault(require("./routers/restaurant.router"));
var path_1 = __importDefault(require("path"));
var multer = require("multer");
(0, database_config_1.dbConnect)();
var app = (0, express_1.default)();
app.use(express_1.default.json());
//cors for development time (localhost:4200--->localhost:5000)
app.use((0, cors_1.default)({
    credentials: true,
    origin: [
        "http://localhost:4200",
        "https://therestaurant-k8mq.onrender.com",
    ],
}));
app.use("/api/foods", food_router_1.default);
app.use("/api/users", user_router_1.default);
app.use("/api/orders", order_router_1.default);
app.use("/api/restaurant", restaurant_router_1.default);
app.use(express_1.default.static("public/browser"));
app.get("*", function (req, res) {
    var htmlfile = path_1.default.join(__dirname, "public", "browser", "index.html");
    res.sendFile(htmlfile);
});
var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log("Website served on http://localhost:" + port);
});
