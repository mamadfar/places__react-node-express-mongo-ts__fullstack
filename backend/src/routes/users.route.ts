import { Router } from "express";

const router = Router();

router.get("/", (req, res, next) => {
    res.status(200).json({message: "Users works!"});
});

export default router;