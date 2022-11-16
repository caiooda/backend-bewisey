import { Router } from "express";
import { AutenticarController } from "../controllers/auth/AutenticarController";
import { ObterPlataformaController } from "../controllers/plataforma/ObterPlataformaController";

const PlataformaRoutes = Router();
const authController = new AutenticarController();
const obterPlataformaController = new ObterPlataformaController();

PlataformaRoutes.get(
  "/",
  authController.handle,
  obterPlataformaController.handle
);

export default PlataformaRoutes;
