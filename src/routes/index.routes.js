import express from "express";

// Importar todas as rotas
import authRouter from "./auth.routes.js";
import movieRouter from "./movieRoutes.js";
import favoriteRouter from "./favoriteRoutes.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Rotas públicas
router.use("/auth", authRouter);
router.use("/movies", movieRouter);

// Rotas protegidas
router.use("/favorites", favoriteRouter);

export default router;
