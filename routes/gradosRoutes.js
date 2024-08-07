import express from "express";
import { grados } from "../controllers/gradosController.js";

const router = express.Router();

router.get("", grados);

export default router;
