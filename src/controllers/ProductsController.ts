import { error } from "console";
import { Request, Response } from "express";
import { AppError } from "../utils/AppError";
import { z } from "zod";
export class ProductsController {
  /**
   * index - GET para listar varios registros.
   * show - GET para exibir um registro especifico.
   * create - POST para criar um novo registro.
   * update - PUT para atualizar um registro.
   * remove - DELETE para remover/deletar um registro
   */

  index(request: Request, response: Response) {
    // request.params: captura parâmetros definidos na /:page/:limit) ou o :id products/7.
    // request.query: captura parâmetros da query string (/products?page=1&limit=10).
    const { page, limit } = request.query;
    response.send(`Pagina ${page} de ${limit}`);
  }

  create(request: Request, response: Response) {
    // response.status(201).json(`produto ${name} custa R$ ${price} `);
    //throw new Error('a')

    const bodySchema = z.object({
      name: z.string({required_error: "Name is required",}).trim().min(6,{message: "Name Must be 6 or more characters"}),
      price: z.number({required_error: "Price is required"}).positive({message:"Price must be positive" }),
      //price: z.number().nullish()  faz com que o campo seja opcional,
    });

    const { name, price } = bodySchema.parse(request.body);

    response.status(201).json({ name, price, userid: request.user_id });
  }
}
