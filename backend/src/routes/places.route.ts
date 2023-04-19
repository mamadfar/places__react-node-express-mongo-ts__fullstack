import {Router} from "express";

import { createPlace, getPlaceById, getPlacesByUserId } from "../controllers/places.controller";

const router = Router();

//* Get single place
router.get("/user/:uid", getPlacesByUserId);

//* Get all places related to a user
router.get("/:pid", getPlaceById);

//* Create new place
router.post("/", createPlace);

export default router;