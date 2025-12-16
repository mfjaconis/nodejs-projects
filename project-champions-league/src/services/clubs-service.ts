import { ClubModel } from "../models/clubs-model";
import * as ClubsRepository from "../repositories/clubs-respository";
import * as HttpResponse from "../utils/http-helper";

export const getClubsService = async () => {
  const data = await ClubsRepository.findAllClubsRepository();
  let response = null;

  if (data) {
    response = await HttpResponse.ok(data);
  } else {
    response = await HttpResponse.noContent();
  }

  return response;
};

export const getClubsByIdService = async (id: number) => {
  const data = await ClubsRepository.findAllClubsByIdRepository(id);
  let response = null;

  if (data) {
    response = await HttpResponse.ok(data);
  } else {
    response = await HttpResponse.noContent();
  }

  return response;
};

export const createClubsService = async (clubs: ClubModel) => {
  let response = null;

  if (Object.keys(clubs).length !== 0) {
    await ClubsRepository.createClubRepository(clubs);
    response = await HttpResponse.created();
  } else {
    response = await HttpResponse.badRequest();
  }

  return response;
};

export const updateClubService = async (id: number, club: ClubModel) => {
  let data = await ClubsRepository.updateClubByIdRepository(id, club);

  const response = await HttpResponse.ok(data);

  return response;
};

export const deleteClubsService = async (id: number) => {
  let response = null;
  const isDeleted = await ClubsRepository.deleteClubByIdRepository(id);

  if (isDeleted) {
    response = HttpResponse.ok({ message: "deleted" });
  } else {
    response = HttpResponse.badRequest();
  }

  return response;
};
