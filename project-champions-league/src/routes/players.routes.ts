import { Router } from "express";
import * as PlayerController from "../controllers/players-controller";

const router = Router();

// Get Players
router.get("/", PlayerController.getPlayerController);
router.get("/:id", PlayerController.getPlayerByIdController);

// Add Player
router.post("/", PlayerController.createPlayerController);

// Update Player
router.patch("/:id", PlayerController.updatePlayerController);

// Delete Player
router.delete("/:id", PlayerController.deletePlayerController);

export default router;
