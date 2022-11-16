import { Router } from "express";
import { AutenticarController } from "../controllers/auth/AutenticarController";
import { ObterMateriaController } from "../controllers/materia/ObterMateriaController";

const MateriaRoutes = Router();
const authController = new AutenticarController();
const obterMateriaController = new ObterMateriaController();

MateriaRoutes.get("/", authController.handle, obterMateriaController.handle);

export default MateriaRoutes;
