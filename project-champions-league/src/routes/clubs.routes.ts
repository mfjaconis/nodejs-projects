import { Router } from "express";
import * as ClubController from "../controllers/clubs-controller";

const router = Router();

//Get Clubs
router.get("/", ClubController.getClubsController);
router.get("/:id", ClubController.getClubByIdController);

//Add Club
router.post("/", ClubController.createClubController);

//Update Clubs
router.patch("/:id", ClubController.updateClubsController);

//Delete Club
router.delete("/:id", ClubController.deleteClubController);

export default router;
