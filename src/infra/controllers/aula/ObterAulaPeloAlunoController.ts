import { Request, Response } from "express";
import ObterAulaPeloAlunoUseCase from "../../../application/usecases/aula/ObterAulaPeloAlunoUseCase";
import { connection } from "../../database/Connection";
import DatabaseRepositoryFactory from "../../factories/DatabaseRepositoryFactory";
import { obterId } from "../../helper/Gerenciador";
import { HandleErroController } from "../error/ErroController";

export class ObterAulaPeloAlunoController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const usuarioId = obterId(request);
      const databaseFactory = new DatabaseRepositoryFactory(connection);
      const service = new ObterAulaPeloAlunoUseCase(databaseFactory);
      const data = await service.execute(usuarioId);
      return response.status(200).json(data);
    } catch (erro: any) {
      const controller = HandleErroController(
        erro,
        "Não foi possível localizar as Aulas por Aluno."
      );
      return response.status(controller.status).json(controller);
    }
  }
}
