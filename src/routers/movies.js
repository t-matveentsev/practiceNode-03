import { Router } from "express";

import { ctrlWrapper } from "../utils/ctrlWrapper.js";

import {
  addMovieController,
  deleteMovieController,
  getMoviesByIdController,
  getMoviesController,
  patchMovieController,
  upsertMovieController,
} from "../controllers/movies.js";

const moviesRouter = Router();

moviesRouter.get("/", ctrlWrapper(getMoviesController));

moviesRouter.get("/:id", ctrlWrapper(getMoviesByIdController));

moviesRouter.post("/", ctrlWrapper(addMovieController));

moviesRouter.put("/:id", ctrlWrapper(upsertMovieController));

moviesRouter.patch("/:id", ctrlWrapper(patchMovieController));

moviesRouter.delete("/:id", ctrlWrapper(deleteMovieController));

export default moviesRouter;
