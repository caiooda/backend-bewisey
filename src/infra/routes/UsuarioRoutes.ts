import { Router } from "express";
import { CriarUsuarioController } from "../controllers/usuario/CriarUsuarioController";

const UsuarioRoutes = Router();
const criarUsuarioController = new CriarUsuarioController();

UsuarioRoutes.post("/registrar", criarUsuarioController.handle);

export default UsuarioRoutes;
