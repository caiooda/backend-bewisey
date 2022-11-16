import { Router } from "express";
import { CriarUsuarioController } from "../controllers/usuario/CriarUsuarioController";
import { ObterDadosUsuarioPeloEmailController } from "../controllers/usuario/ObterDadosUsuarioPeloEmailController";
import { RedefinirSenhaController } from "../controllers/usuario/RedefinirSenhaController";

const UsuarioRoutes = Router();
const criarUsuarioController = new CriarUsuarioController();
const obterDadosUsuarioPeloEmailController =
  new ObterDadosUsuarioPeloEmailController();
const redefinirSenhaController = new RedefinirSenhaController();

UsuarioRoutes.post("/registrar", criarUsuarioController.handle);
UsuarioRoutes.get(
  "/encontrar-email",
  obterDadosUsuarioPeloEmailController.handle
);
UsuarioRoutes.post(
  "/redefinir-senha",
  redefinirSenhaController.handle
);

export default UsuarioRoutes;
