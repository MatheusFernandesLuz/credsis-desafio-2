import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { getRepository } from "typeorm";
import { Municipio } from "../models/Municipio";

class MunicipioController {
  async create(req: Request, res: Response) {
    const data = req.body;

    const municipioRepository = getRepository(Municipio);
    const newMunicipio = municipioRepository.create(data);
    await municipioRepository.save(newMunicipio);

    return res.status(StatusCodes.CREATED).json(newMunicipio);
  }

  async update(req: Request, res: Response) {
    const id = req.params.id;
    const data = req.body;

    const municipioRepository = getRepository(Municipio);
    const municipio = await municipioRepository.findOne(id);
    const newMunicipio = await municipioRepository.update(municipio, data);

    return res.status(StatusCodes.OK).json(newMunicipio);
  }

  async getAll(req: Request, res: Response) {
    const municipioRepository = getRepository(Municipio);
    const municipios = await municipioRepository.find();
    return res.status(StatusCodes.OK).json(municipios);
  }

  async delete(req: Request, res: Response) {
    const id = req.params.id;
    const municipioRepository = getRepository(Municipio);

    const municipio = await municipioRepository.findOne(id);
    await municipioRepository.remove(municipio);

    return res
      .status(StatusCodes.OK)
      .json({ resultado: "Deletado com sucesso", municipio: municipio });
  }
}

export { MunicipioController }