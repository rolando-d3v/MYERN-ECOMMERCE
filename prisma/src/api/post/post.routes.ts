import { Router } from "express";

//controllers
import * as CtrlPost from "./post.controller";

//middlewares
// import {authToken} from "../../middleware/authToken";

const router = Router();
router.get("/", CtrlPost.getPost);
router.post("/", CtrlPost.createPost);
router.delete("/:id", CtrlPost.deletePost);
router.put("/:id", CtrlPost.updatedPost);

export default router;
