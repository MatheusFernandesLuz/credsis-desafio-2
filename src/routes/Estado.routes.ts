import { Router } from "express";
import { EstadoController } from "../controllers/EstadoController";

const estadoRouter = Router();
const estadoController = new EstadoController();

estadoRouter.post('/estado', estadoController.create);
estadoRouter.get('/estado', estadoController.getAll);
estadoRouter.put('/estado/:id', estadoController.update);
estadoRouter.delete('/estado/:id', estadoController.delete);

export { estadoRouter };