import express from "express";
import morgan from "morgan";
import cors from "cors";
// import config from "./config/config";

//import routes
import userRoutes from "./api/user/user.routes";
import productRoutes from "./api/product/product.routes";
// import authRoutes from "./api/auth/auth.routes";

//app server
const app = express();
// const port = config.port;

const port = 4000
app.listen(port, () => {
  console.log(`🔥  🚀  server port ➡️ ${port} 😃  ✔️`);
});

//MIDDLEWARE
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/user", userRoutes);
app.use("/product",productRoutes);
// app.use("/auth", authRoutes);


