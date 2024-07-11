import express from "express";
import estudiantesRoutes from "./routes/estudiantesRoutes.js";

const app = express();


// Configuracion del servidor
const port = 4000;
app.listen(port, () => {
  console.log(`El servidor esta corriendo en el servidor ${port}`);
});

// Habilitar Pug 
app.set("view engine", "pug");
app.set("views", "./views");

// Carpeta publica
app.use(express.static("public"));

// ROUTING
const rutas = {
  "/estudiantes": estudiantesRoutes,
};

Object.entries(rutas).forEach(([path, router]) => {
  app.use(path, router);
});
