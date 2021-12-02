"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
// import config from "./config/config";
//import routes
var user_routes_1 = __importDefault(require("./api/user/user.routes"));
var product_routes_1 = __importDefault(require("./api/product/product.routes"));
// import authRoutes from "./api/auth/auth.routes";
//app server
var app = (0, express_1.default)();
// const port = config.port;
var port = 4000;
app.listen(port, function () {
    console.log("\uD83D\uDD25  \uD83D\uDE80  server port \u27A1\uFE0F ".concat(port, " \uD83D\uDE03  \u2714\uFE0F"));
});
//MIDDLEWARE
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
//routes
app.use("/user", user_routes_1.default);
app.use("/product", product_routes_1.default);
// app.use("/auth", authRoutes);
