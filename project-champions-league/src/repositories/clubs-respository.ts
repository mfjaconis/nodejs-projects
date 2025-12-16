import { ClubModel, ClubModelEdit } from "../models/clubs-model";
import fs from "fs/promises";

// const data = async () => await fs.readFile("../data/clubs.json", "utf-8");
const dataBase: ClubModel[] = [{ id: 1, name: "Matheus" }];

export const findAllClubsRepository = async (): Promise<ClubModel[]> => {
  const data = await fs.readFile("./src/data/clubs.json", "utf-8");
  const clubs: ClubModel[] = JSON.parse(data);

  return clubs;
};

export const findAllClubsByIdRepository = async (
  id: number
): Promise<ClubModel | undefined> => {
  const data = await fs.readFile("./src/data/clubs.json", "utf-8");
  const clubs: ClubModel[] = JSON.parse(data);
  return clubs.find((club) => club.id === id);
};

export const createClubRepository = async (club: ClubModel) => {
  const data = await fs.readFile("./src/data/clubs.json", "utf-8");

  const clubs: ClubModel[] = JSON.parse(data);

  clubs.push(club);

  await fs.writeFile("./src/data/clubs.json", JSON.stringify(clubs, null, 2));
};

export const updateClubByIdRepository = async (
  id: number,
  club: ClubModelEdit
): Promise<ClubModelEdit> => {
  const data = await fs.readFile("./src/data/clubs.json", "utf-8");
  const clubs: ClubModel[] = JSON.parse(data);

  const indexClub = clubs.findIndex((club) => club.id === id);

  if (indexClub !== -1) {
    clubs[indexClub] = club;
  }

  return clubs[indexClub];
};

export const deleteClubByIdRepository = async (
  id: number
): Promise<boolean> => {
  const data = await fs.readFile("./src/data/clubs.json", "utf-8");
  const clubs: ClubModel[] = JSON.parse(data);

  const indexClub = clubs.findIndex((club) => club.id === id);

  if (indexClub === -1) {
    return false;
  }

  clubs.splice(indexClub, 1);

  await fs.writeFile("./src/data/clubs.json", JSON.stringify(clubs, null, 2));

  return true;
};
