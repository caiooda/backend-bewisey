import { Router } from "express";
import { LoginController } from "../controllers/auth/LoginController";

const AutenticacaoRoutes = Router();
const loginController = new LoginController();

AutenticacaoRoutes.post("/login", loginController.handle);

export default AutenticacaoRoutes;
