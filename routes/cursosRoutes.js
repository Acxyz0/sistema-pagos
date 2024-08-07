import express from "express";
import { cursos } from "../controllers/cursosController.js";

const router = express.Router();

router.get("", cursos);

export default router;
