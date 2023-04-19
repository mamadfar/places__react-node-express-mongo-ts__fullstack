import {NextFunction, Request, Response, Router} from "express";
import { DUMMY_PLACES } from "../data/Dummy_Data";

const router = Router();

router.get("/user/:uid", (req: Request<{uid: string}>, res: Response, next: NextFunction) => {
    const userId = req.params.uid;
    const places = DUMMY_PLACES.filter(place => place.creator === userId);
    if(!places.length) {
        const error = {
            message: "Could not find a place for the provided user id.",
            code: 404
        };
        throw error
        // return next(error);
    };
    res.status(200).json({places});
});

router.get("/:pid", (req: Request<{pid: string}>, res: Response, next: NextFunction) => {
    const placeId = req.params.pid;
    const place = DUMMY_PLACES.find(place => place.id === placeId);
    if(!place) {
        const error = {
            message: "Could not find a place for the provided id.",
            code: 404
        };
        return next(error);
    };
    res.status(200).json({place});
});

export default router;