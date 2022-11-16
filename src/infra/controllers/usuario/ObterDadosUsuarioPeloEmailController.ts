import { Request, Response } from "express";
import ObterDadosUsuarioPeloEmailUseCase from "../../../application/usecases/usuario/ObterDadosUsuarioPeloEmailUseCase";
import { connection } from "../../database/Connection";
import DatabaseRepositoryFactory from "../../factories/DatabaseRepositoryFactory";
import { HandleErroController } from "../error/ErroController";

export class ObterDadosUsuarioPeloEmailController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const data = request.body;
      const databaseFactory = new DatabaseRepositoryFactory(connection);
      const service = new ObterDadosUsuarioPeloEmailUseCase(databaseFactory);
      const result = await service.execute(data);
      return response.status(200).json(result.id);
    } catch (erro: any) {
      const controller = HandleErroController(
        erro,
        "Não foi possível redefinar sua senha (E-mail inválido)."
      );
      return response.status(controller.status).json(controller);
    }
  }
}
