export const orderMovies = (movies, selectedId) => {
  const selectedMovie = movies.find((movie) => movie.Id === selectedId);
  const otherMovies = movies
    .filter((movie) => movie.Id !== selectedId)
    .sort((a, b) => new Date(b.Date) - new Date(a.Date));

  return selectedMovie ? [selectedMovie, ...otherMovies] : otherMovies;
};

export const getDefaultMovie = (movies, selectedId) => {
  return movies.find((movie) => movie.Id === selectedId);
};
