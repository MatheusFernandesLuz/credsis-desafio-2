import { Router } from "express";
import { MunicipioController } from "../controllers/MunicipioController";

const municipioRouter = Router();
const municipioController = new MunicipioController();

municipioRouter.post('/municipio', municipioController.create);
municipioRouter.get('/municipio', municipioController.getAll);
municipioRouter.put('/municipio/:id', municipioController.update);
municipioRouter.delete('/municipio/:id', municipioController.delete);

export { municipioRouter };