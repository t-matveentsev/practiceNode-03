import { getMovies, getMovieById } from "../services/movies.js";

export const getMoviesController = async (req, res) => {
  const data = await getMovies();
  res.json({
    status: 200,
    message: "Successfully find movies",
    data,
  });
};

export const getMoviesByIdController = async (req, res) => {
  const { id } = req.params;
  const data = await getMovieById(id);

  if (!data) {
    return res.status(404).json({
      status: 404,
      message: `Movie with id=${id} not found`,
    });
  }

  res.json({
    status: 200,
    message: `Successfully find movie with id=${id}`,
    data,
  });
};
