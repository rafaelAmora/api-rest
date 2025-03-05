import { Request, Response, NextFunction } from "express";
export function myMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  //inseri uma propriedade dentro de request types/request.d.ts
  request.user_id = "123456";

  return next();
}
