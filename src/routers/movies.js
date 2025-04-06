import { Router } from "express";
import {
  getMoviesByIdController,
  getMoviesController,
} from "../controllers/movies.js";

const moviesRouter = Router();

moviesRouter.get("/", getMoviesController);

moviesRouter.get("/:id", getMoviesByIdController);

export default moviesRouter;
