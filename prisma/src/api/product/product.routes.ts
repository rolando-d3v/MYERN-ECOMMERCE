import { Router } from "express";

//controllers
import * as CtrlPro from "./product.controller";

//middlewares
import {authToken} from "../../middlewares/authentication";

const router = Router();
router.get("/", authToken,  CtrlPro.getProducts);
router.post("/", CtrlPro.createProduct);
router.delete("/:id", CtrlPro.deleteProduct);
router.put("/:id", CtrlPro.updatedProduct);

export default router;
