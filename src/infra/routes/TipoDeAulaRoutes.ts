import { Router } from "express";
import { AutenticarController } from "../controllers/auth/AutenticarController";
import { ObterTipoDeAulaController } from "../controllers/tipo-de-aula/ObterTipoDeAulaController";

const TipoDeAulaRoutes = Router();
const authController = new AutenticarController();
const obterTipoDeAulaController = new ObterTipoDeAulaController();

TipoDeAulaRoutes.get(
  "/",
  authController.handle,
  obterTipoDeAulaController.handle
);

export default TipoDeAulaRoutes;
