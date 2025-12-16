import { PlayerModel } from "../models/players-model";
import { StatisticsModel } from "../models/statistics-model";
import * as PlayerRepository from "../repositories/players-respository";
import * as HttpResponse from "../utils/http-helper";

export const getPlayerService = async () => {
  const data = await PlayerRepository.findAllPlayersRepository();
  let response = null;

  if (data) {
    response = await HttpResponse.ok(data);
  } else {
    response = await HttpResponse.noContent();
  }

  return response;
};

export const getPlayerByIdService = async (id: number) => {
  const data = await PlayerRepository.findAllPlayerByIdRepository(id);
  let response = null;

  if (data) {
    response = await HttpResponse.ok(data);
  } else {
    response = await HttpResponse.noContent();
  }

  return response;
};

export const createPlayerService = async (player: PlayerModel) => {
  let response = null;

  if (Object.keys(player).length !== 0) {
    await PlayerRepository.createPlayerRepository(player);
    response = await HttpResponse.created();
  } else {
    response = await HttpResponse.badRequest();
  }

  return response;
};

export const deletePlayerService = async (id: number) => {
  let response = null;
  const isDeleted = await PlayerRepository.deletePlayerByIdRepository(id);

  if (isDeleted) {
    response = HttpResponse.ok({ message: "deleted" });
  } else {
    response = HttpResponse.badRequest();
  }

  return response;
};

export const updatePlayerService = async (
  id: number,
  statistics: StatisticsModel
) => {
  let data = await PlayerRepository.updatePlayerByIdRepository(id, statistics);

  const response = await HttpResponse.ok(data);

  return response;
};
