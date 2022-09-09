import { Request, Response } from "express";
import ObterAulaPeloProfessorUseCase from "../../../application/usecases/aula/ObterAulaPeloProfessorUseCase";
import { connection } from "../../database/Connection";
import DatabaseRepositoryFactory from "../../factories/DatabaseRepositoryFactory";
import { obterId } from "../../helper/Gerenciador";
import { HandleErroController } from "../error/ErroController";

export class ObterAulaPeloProfessorController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const usuarioId = obterId(request);
      const databaseFactory = new DatabaseRepositoryFactory(connection);
      const service = new ObterAulaPeloProfessorUseCase(databaseFactory);
      const data = await service.execute(usuarioId);
      return response.status(200).json(data);
    } catch (erro: any) {
      const controller = HandleErroController(
        erro,
        "Não foi possível localizar as Aulas por Professor."
      );
      return response.status(controller.status).json(controller);
    }
  }
}
