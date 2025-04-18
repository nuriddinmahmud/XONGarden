import { Router } from "express";
import {
  register,
  login,
  findAll,
  findOne,
  update,
  remove,
} from "../controllers/user.controller.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);

router.get("/", findAll);      
router.get("/:id", findOne);     
router.put("/:id", update);      
router.delete("/:id", remove);    


export default router;
