import { Router } from "express";
import {
  getMoviesByIdController,
  getMoviesController,
} from "../controllers/movies.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";

const moviesRouter = Router();

moviesRouter.get("/", ctrlWrapper(getMoviesController));

moviesRouter.get("/:id", ctrlWrapper(getMoviesByIdController));

export default moviesRouter;
