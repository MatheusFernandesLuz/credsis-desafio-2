import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { StatusCodes } from "http-status-codes";
import { Estado } from "../models/Estado";

class EstadoController {
  async create(req: Request, res: Response) {
    const data = req.body;

    const estadoRepository = getRepository(Estado);
    const newEstado = estadoRepository.create(data);
    await estadoRepository.save(newEstado);

    return res.status(StatusCodes.CREATED).json(newEstado);
  }

  async update(req: Request, res: Response) {
    const id = req.params.id;
    const data = req.body;

    const estadoRepository = getRepository(Estado);
    const estado = await estadoRepository.findOne(id);
    const newEstado = await estadoRepository.update(estado, data);

    return res.status(StatusCodes.OK).json(newEstado);
  }

  async getAll(req: Request, res: Response) {
    const estadoRepository = getRepository(Estado);
    const estados = await estadoRepository.find();
    return res.status(StatusCodes.OK).json(estados);
  }

  async delete(req: Request, res: Response) {
    const id = req.params.id;
    const estadoRepository = getRepository(Estado);

    const estado = await estadoRepository.findOne(id);
    await estadoRepository.remove(estado);

    return res
      .status(StatusCodes.OK)
      .json({ resultado: "Deletado com sucesso", estado });
  }
}

export { EstadoController }