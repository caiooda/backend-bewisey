import { Router } from "express";
import { AtualizarUsuarioController } from "../controllers/usuario/AtualizarUsuarioController";
import { CriarUsuarioController } from "../controllers/usuario/CriarUsuarioController";
import { ObterAlunosController } from "../controllers/usuario/ObterAlunosController";
import { ObterProfessoresController } from "../controllers/usuario/ObterProfessoresController";
import { ObterUsuarioController } from "../controllers/usuario/ObterUsuarioController";

const UsuarioRoutes = Router();
const criarUsuarioController = new CriarUsuarioController();
const obterUsuarioController = new ObterUsuarioController();
const obterProfessoresController = new ObterProfessoresController();
const obterAlunosController = new ObterAlunosController();
const atualizarUsuarioController = new AtualizarUsuarioController();

UsuarioRoutes.post("/registrar", criarUsuarioController.handle);
UsuarioRoutes.get("/logado", obterUsuarioController.handle);
UsuarioRoutes.put("", atualizarUsuarioController.handle);
UsuarioRoutes.get("/professores", obterProfessoresController.handle);
UsuarioRoutes.get("/alunos", obterAlunosController.handle);

export default UsuarioRoutes;
