import express from "express";
import morgan from "morgan";
import cors from "cors";
import { createdSetupRoles } from './api/role/iniciarRoles';
// import config from "./config/config";



//import routes
import userRoutes from "./api/user/user.routes";
import productRoutes from "./api/product/product.routes";
import postRoutes from "./api/post/post.routes";
import roleRoutes from "./api/role/role.routes";
import roleUserRoutes from "./api/roleUser//roleUser.routes";
import loginRoutes from "./api/login/login.routes";
// import authRoutes from "./api/auth/auth.routes";

//app server
const app = express();
// const port = config.port;


//created roles
createdSetupRoles()

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
app.use("/post",postRoutes);
app.use("/role",roleRoutes);
app.use("/role-user",roleUserRoutes);
app.use("/login",loginRoutes);
// app.use("/auth", authRoutes);


