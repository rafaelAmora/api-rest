import { Router } from "express";
import { myMiddleware } from "../middlewares/my-middleware";
import { ProductsController } from "../controllers/ProductsController";

const productsRouter = Router();
const productsController = new ProductsController();
productsRouter.get("/", productsController.index);

//Middleware LOCAL em uma rota especifica. posso colocar outros Middlewares
productsRouter.post("/", myMiddleware, productsController.create);

export { productsRouter };
