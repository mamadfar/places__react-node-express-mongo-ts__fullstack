import express from "express";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: false}));
app.use(express.json());


//? Health Route
app.get("/ping", (req, res) => res.status(200).json("Pong"));

app.listen(PORT, () => console.log("Server is running..."));