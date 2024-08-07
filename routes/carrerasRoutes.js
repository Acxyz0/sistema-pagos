import express from "express";
import { carreras } from "../controllers/carrerasController.js";

const router = express.Router();

router.get("", carreras);

export default router;
