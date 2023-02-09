import express from "express";
import { route1 } from "../controllers/controller";
const router = express.Router();

router.get("/", route1);

export default router;
