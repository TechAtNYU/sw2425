import express from "express";
import { createUser, deleteUser, getUser, updateUser, getOneUser } from "../controller/user.controller.js";


const router = express.Router();

router.get("/", getUser);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/:id", getOneUser);



export default router;

