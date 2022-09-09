import {
  PrismaClientInitializationError,
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientValidationError,
} from "@prisma/client/runtime";

export function HandleErroController(
  erro: { erros: []; status: number } | any,
  mensagemController: string,
  controller?: string
) {
  if (erro.erros) return erro;
  if (erro instanceof PrismaClientInitializationError) {
    return {
      tipo: "INITIALIZATION ERROR",
      erros: [
        {
          mensagem: mensagemController,
        },
        {
          mensagem: erro.message,
        },
      ],
      status: 500,
    };
  }
  if (erro instanceof PrismaClientKnownRequestError) {
    if (erro.code == "P2003") {
      return {
        tipo: "KNOW REQUEST ERROR",
        erros: [
          {
            mensagem: `${controller} está sendo utilizado(a) e não pode ser excluído(a)!`,
          },
        ],
        status: 400,
      };
    }
    return {
      tipo: "KNOW REQUEST ERROR",
      erros: [
        {
          mensagem: mensagemController,
        },
        {
          codigo: erro.code,
          mensagem: erro.message,
        },
      ],
      status: 500,
    };
  }
  if (erro instanceof PrismaClientUnknownRequestError) {
    return {
      tipo: "UNKNOW REQUEST ERROR",
      erros: [
        {
          mensagem: mensagemController,
        },
        {
          mensagem: erro.message,
        },
      ],
      status: 500,
    };
  }
  if (erro instanceof PrismaClientValidationError) {
    return {
      tipo: "VALIDATION ERROR",
      erros: [
        {
          mensagem: mensagemController,
        },
        {
          mensagem: erro.message,
        },
      ],
      status: 500,
    };
  } else {
    return {
      tipo: "INTERNAL ERROR",
      erros: [
        {
          mensagem: mensagemController,
        },
        {
          mensagem:
            "DEU RUIM DEMAIS",
        },
      ],
      status: 500,
    };
  }
}
