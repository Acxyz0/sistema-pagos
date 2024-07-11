import express from "express";
import { estudiantes } from "../controllers/estudiantesController.js";

const router = express.Router();

// Mostrar estudiantes
router.get("", estudiantes);

// Mostrar estudiante por ID
router.get("/estudiante/:id", )

export default router;
