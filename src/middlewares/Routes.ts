import { Router } from "express";
import AutenticacaoRoutes from "../infra/routes/AutenticacaoRoutes";
import CidadeRoutes from "../infra/routes/CidadeRoutes";
import MateriaRoutes from "../infra/routes/MateriaRoutes";
import PlataformaRoutes from "../infra/routes/PlataformaRoutes";
import TipoDeAulaRoutes from "../infra/routes/TipoDeAulaRoutes";
import UsuarioRoutes from "../infra/routes/UsuarioRoutes";

const routes = Router();

routes.use("/api/usuario", UsuarioRoutes);
routes.use("/api/materia", MateriaRoutes);
routes.use("/api/plataforma", PlataformaRoutes);
routes.use("/api/tipo-de-aula", TipoDeAulaRoutes);
routes.use("/api/cidade", CidadeRoutes);
routes.use("/api/auth", AutenticacaoRoutes);

export default routes;
