import {Router} from "express";

import { createPlace, deletePlace, getPlaceById, getPlacesByUserId, updatePlace } from "../controllers/places.controller";

const router = Router();

//* Get single place
router.get("/user/:uid", getPlacesByUserId);

//* Get all places related to a user
router.get("/:pid", getPlaceById);

//* Create new place
router.post("/", createPlace);

//* Update a place
router.patch("/:pid", updatePlace);

//* Delete a place
router.delete("/:pid", deletePlace);

export default router;