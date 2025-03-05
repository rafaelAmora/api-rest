import { routes } from "./routes";
import express, { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import { AppError } from "./utils/AppError";

const PORT = 3333;
const app = express(); //inicializando o express, e colocando todos os recursos do express dentro da variavel app

app.use(express.json()); //estou dizendo que a forma de representar dados vai ser o JSON
app.use(routes);
// app.use(myMiddleware) aplica o Middleware em todas as rotas, uma forma global

/**
 * 400 (bad request):erro do cliente.
 * 500 (internal server error): erro interno do servidor
 */

app.use(
  (error: any, _request: Request, response: Response, _: NextFunction) => {
    if (error instanceof AppError) {
      response.status(error.statusCode).json({ message: error.message });
    }
    if (error instanceof ZodError) {
      response
        .status(400)
        .json({ message: "Validation error", issues: error.format() });
    }
    response.status(500).json({ message: "Internal Server Error" });
  }
);

app.listen(PORT, () => console.log(`Servidor on, porta : ${PORT}`));
