import { Router } from "express";
import { getTop100Movies } from "./screenEntertainment.controller";

const router = Router();

// GET all movies
router.get("/all-movies", async (req, res) => {
  const response = await getTop100Movies(req, res);
  res.send(response);
});

// POST a new movie
router.post("/", (req, res) => {
  // Imagine we're adding a new movie here
  res.status(201).send("Movie createds");
});

export default router;
