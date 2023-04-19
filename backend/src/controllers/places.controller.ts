import { NextFunction, Request, Response } from "express";
import {v4 as uuid} from "uuid";

import { DUMMY_PLACES } from "../data/Dummy_Data";
import HttpError from "../models/http-error";
import { IPlace } from "../types/places.type";
import Place from "../models/Place";

//* Get single place
export const getPlaceById = (req: Request<{pid: string}>, res: Response, next: NextFunction) => {
    const placeId = req.params.pid;
    const place = DUMMY_PLACES.find(place => place.id === placeId);
    if(!place) {
        return next(new HttpError("Could not find a place for the provided id.", 404)); //! Async error
    };
    res.status(200).json({place});
};

//* Get all places related to a user
export const getPlacesByUserId = (req: Request<{uid: string}>, res: Response, next: NextFunction) => {
    const userId = req.params.uid;
    const places = DUMMY_PLACES.filter(place => place.creator === userId);
    if(!places.length) {
        throw new HttpError("Could not find a place for the provided user id.", 404); //! Sync error
    };
    res.status(200).json({places});
};

//* Create new place
export const createPlace = (req: Request<{}, {}, Omit<IPlace, "id" | "imageUrl">>, res: Response, next: NextFunction) => {
    const {title, description, address, location, creator} = req.body;
    const newPlace = new Place(uuid(), title, description, "", location, address, creator);

    DUMMY_PLACES.unshift(newPlace);

    res.status(201).json({place: newPlace})
};

//* Update a place
export const updatePlace = (req: Request<{pid: string}, {}, Omit<IPlace, "id" | "imageUrl" | "address" | "location" | "creator">>, res: Response, next: NextFunction) => {
    const placeId = req.params.pid;
    const {title, description} = req.body;

    const updatedPlace = {...DUMMY_PLACES.find(place => place.id === placeId)} as IPlace;
    const updatedPlaceIndex = DUMMY_PLACES.findIndex(place => place.id === placeId);
        updatedPlace.title = title;
        updatedPlace.description = description;
        DUMMY_PLACES[updatedPlaceIndex] = updatedPlace;
    
        res.status(200).json({place: updatedPlace});
};

//* Delete a place
export const deletePlace = (req: Request<{pid: string}>, res: Response, next: NextFunction) => {
    const placeId = req.params.pid;

};