import { Router } from "express";
import AutenticacaoRoutes from "../infra/routes/AutenticacaoRoutes";
import UsuarioRoutes from "../infra/routes/UsuarioRoutes";

const routes = Router();

routes.use("/api/usuario", UsuarioRoutes);
routes.use("/api/auth", AutenticacaoRoutes);

export default routes;
