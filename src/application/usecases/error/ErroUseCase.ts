export function ErroUseCase(erros: { mensagem: string }[], status: number) {
  throw { tipo: "INTERNAL ERROR", erros: erros, status: status };
}
