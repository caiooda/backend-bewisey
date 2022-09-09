import { Router } from "express";
import AulasRoutes from "../infra/routes/AulaRoutes";
import AutenticacaoRoutes from "../infra/routes/AutenticacaoRoutes";
import UsuarioRoutes from "../infra/routes/UsuarioRoutes";


const routes = Router();

routes.use("/api/usuario", UsuarioRoutes);
routes.use("/api/auth", AutenticacaoRoutes);
routes.use("/api/aula", AulasRoutes);

export default routes;
