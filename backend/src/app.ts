import express, { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";

import placesRoutes from "./routes/places.route";
import usersRoutes from "./routes/users.route";
import { API_V } from "./config";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 8080;

//? Middleware Configuration
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//? Routes
app.use(`/api/${API_V}/places`, placesRoutes);
app.use(`/api/${API_V}/users`, usersRoutes);

//! Error Handling
app.use((error: {code: number, message: string}, req: Request, res: Response, next: NextFunction) => {
    if(res.headersSent) return next(error);
    res.status(error.code || 500);
    res.json({message: error.message || "An unknown error occurred!"})
})

//? Health Route
app.get("/ping", (req: Request, res: Response) => res.status(200).json("Pong"));

//? Server
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));