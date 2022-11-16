import { Request, Response } from "express";
import RedefinirSenhaUseCse from "../../../application/usecases/usuario/RedefinirSenhaUseCase";
import { connection } from "../../database/Connection";
import DatabaseRepositoryFactory from "../../factories/DatabaseRepositoryFactory";
import { obterUsuario } from "../../helper/Gerenciador";
import { HandleErroController } from "../error/ErroController";

export class RedefinirSenhaController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const data = request.body;
      const databaseFactory = new DatabaseRepositoryFactory(connection);
      const service = new RedefinirSenhaUseCse(databaseFactory);
      await service.execute(data);
      return response.status(200).send();
    } catch (erro: any) {
      const controller = HandleErroController(
        erro,
        "Não foi possível redefinar sua senha."
      );
      return response.status(controller.status).json(controller);
    }
  }
}
