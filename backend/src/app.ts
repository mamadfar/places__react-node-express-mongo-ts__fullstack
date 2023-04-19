import express, { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";

import { API_V } from "./config";
import HttpError from "./models/http-error";
import { placesRoutes, usersRoutes } from "./routes";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 8080;

//? Middleware Configuration
app.use(express.urlencoded({extended: false})); //* form data through the form action
app.use(express.json()); //* request with a json body

//? Routes
app.use(`/api/${API_V}/places`, placesRoutes);
app.use(`/api/${API_V}/users`, usersRoutes);
//? Health Route
app.get("/ping", (req: Request, res: Response) => res.status(200).json("Pong"));

//! Not Found Route
app.use(()=> {
    throw new HttpError("Could not find the requested route!", 404);
});

//! Error Handling
app.use((error: HttpError, req: Request, res: Response, next: NextFunction) => {
    if(res.headersSent) return next(error);
    res.status(error.code || 500);
    res.json({message: error.message || "An unknown error occurred!"})
});

//? Server
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));