import express from "express";

import placesRoutes from "./routes/places.route";
import usersRoutes from "./routes/users.route";

const app = express();
const PORT = process.env.PORT || 8080;

//? Configuration
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//? Routes
app.use("/places", placesRoutes);
app.use("/users", usersRoutes);

//? Health Route
app.get("/ping", (req, res) => res.status(200).json("Pong"));

//? Server
app.listen(PORT, () => console.log("Server is running..."));