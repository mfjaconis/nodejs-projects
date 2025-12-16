import { Request, Response } from "express";
import * as PlayerService from "../services/players-service";
import { StatisticsModel } from "../models/statistics-model";

export const getPlayerController = async (req: Request, res: Response) => {
  const httpResponse = await PlayerService.getPlayerService();

  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPlayerByIdController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const httpResponse = await PlayerService.getPlayerByIdService(id);

  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const createPlayerController = async (req: Request, res: Response) => {
  const bodyValue = req.body;
  const httpResponse = await PlayerService.createPlayerService(bodyValue);

  if (httpResponse) {
    res.status(httpResponse.statusCode).json(httpResponse.body);
  }
};

export const deletePlayerController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const httpResponse = await PlayerService.deletePlayerService(id);

  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const updatePlayerController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const bodyValue: StatisticsModel = req.body;

  const httpResponse = await PlayerService.updatePlayerService(id, bodyValue);

  res.status(httpResponse.statusCode).json(httpResponse.body);
};
