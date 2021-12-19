import { Router } from "express";

//controllers
import * as CtrlRole from "./roleUser.controller";

//middlewares
// import {authToken} from "../../middleware/authToken";

const router = Router();
router.get("/", CtrlRole.getRole);
router.post("/", CtrlRole.createRole);
router.delete("/:id", CtrlRole.deleteRole);
router.put("/:id", CtrlRole.updatedRole);

export default router;
