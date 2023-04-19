import {NextFunction, Request, Response, Router} from "express";
import { DUMMY_PLACES } from "../data/Dummy_Data";
import HttpError from "../models/http-error";

const router = Router();

router.get("/user/:uid", (req: Request<{uid: string}>, res: Response, next: NextFunction) => {
    const userId = req.params.uid;
    const places = DUMMY_PLACES.filter(place => place.creator === userId);
    if(!places.length) {
        throw new HttpError("Could not find a place for the provided user id.", 404);
    };
    res.status(200).json({places});
});

router.get("/:pid", (req: Request<{pid: string}>, res: Response, next: NextFunction) => {
    const placeId = req.params.pid;
    const place = DUMMY_PLACES.find(place => place.id === placeId);
    if(!place) {
        return next(new HttpError("Could not find a place for the provided id.", 404));
    };
    res.status(200).json({place});
});

export default router;