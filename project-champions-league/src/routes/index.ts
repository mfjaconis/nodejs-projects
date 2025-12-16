import { Router } from "express";
import playersRoutes from "./players.routes";
import clubsRoutes from "./clubs.routes";

const router = Router();

router.use("/players", playersRoutes);
router.use("/clubs", clubsRoutes);

export default router;
