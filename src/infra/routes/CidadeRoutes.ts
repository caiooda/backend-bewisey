import { Router } from "express";
import { AutenticarController } from "../controllers/auth/AutenticarController";
import { ObterCidadeController } from "../controllers/cidade/ObterCidadeController";

const CidadeRoutes = Router();
const authController = new AutenticarController();
const obterCidadeController = new ObterCidadeController();

CidadeRoutes.get("/", authController.handle, obterCidadeController.handle);

export default CidadeRoutes;
