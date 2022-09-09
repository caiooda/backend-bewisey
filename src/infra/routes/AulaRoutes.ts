import { Router } from "express";
import { ObterAulaPeloAlunoController } from "../controllers/aula/ObterAulaPeloAlunoController";
import { ObterAulaPeloProfessorController } from "../controllers/aula/ObterAulaPeloProfessorController";
import { AutenticarController } from "../controllers/auth/AutenticarController";
import { LoginController } from "../controllers/auth/LoginController";

const AulasRoutes = Router();
const autenticarController = new AutenticarController();
const criarAulaController = new LoginController();
const obterAulaPeloAlunoController = new ObterAulaPeloAlunoController();
const obterAulaPeloProfessorController = new ObterAulaPeloProfessorController();

AulasRoutes.post("", autenticarController.handle, criarAulaController.handle);
AulasRoutes.get(
  "/professor",
  autenticarController.handle,
  obterAulaPeloProfessorController.handle
);
AulasRoutes.get(
  "/aluno",
  autenticarController.handle,
  obterAulaPeloAlunoController.handle
);

export default AulasRoutes;
