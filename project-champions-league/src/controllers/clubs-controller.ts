import { Request, Response } from "express";
import * as ClubsService from "../services/clubs-service";
import { StatisticsModel } from "../models/statistics-model";
import { ClubModel } from "../models/clubs-model";

export const getClubsController = async (req: Request, res: Response) => {
  const httpResponse = await ClubsService.getClubsService();

  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getClubByIdController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const httpResponse = await ClubsService.getClubsByIdService(id);

  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const createClubController = async (req: Request, res: Response) => {
  const bodyValue = req.body;
  const httpResponse = await ClubsService.createClubsService(bodyValue);

  if (httpResponse) {
    res.status(httpResponse.statusCode).json(httpResponse.body);
  }
};

export const updateClubsController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const bodyValue: ClubModel = req.body;

  const httpResponse = await ClubsService.updateClubService(id, bodyValue);

  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const deleteClubController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const httpResponse = await ClubsService.deleteClubsService(id);

  res.status(httpResponse.statusCode).json(httpResponse.body);
};
