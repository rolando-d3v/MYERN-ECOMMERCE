import { Router } from "express";

//controllers
import * as CtrlUser from "./user.controller";

//middlewares
// import {authToken} from "../../middleware/authToken";


const router = Router();
router.get("/", CtrlUser.getUsers);
router.post("/", CtrlUser.createUser);
router.delete("/:id", CtrlUser.deleteUser);

export default router;
