import createHttpError from "http-errors";

import { getMovies, getMovieById } from "../services/movies.js";

export const getMoviesController = async (req, res, next) => {
  try {
    const data = await getMovies();
    res.json({
      status: 200,
      message: "Successfully find movies",
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const getMoviesByIdController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await getMovieById(id);

    if (!data) {
      throw createHttpError(404, `Movie with id=${id} not found`);
      //   const error = new Error(`Movie with id=${id} not found`);
      //   error.status = 404;
      //   throw error;
    }

    res.json({
      status: 200,
      message: `Successfully find movie with id=${id}`,
      data,
    });
  } catch (error) {
    next(error);
  }
};
