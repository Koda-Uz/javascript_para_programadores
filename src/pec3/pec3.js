import pec2 from './pec2';

async function setMovieHeading(movieId, titleSelector, infoSelector, directorSelector) {
  // Obtenemos los elementos del DOM con QuerySelector y los almacenamos en una variable
  const movieTitle = document.querySelector(titleSelector);
  const movieInfo = document.querySelector(infoSelector);
  const movieDirector = document.querySelector(directorSelector);

  // Obtenemos la información de la película llamando al método de pec2.js
  const movie = await pec2.getMovieInfo(movieId);

  // Sustituimos los datos utilizando un método de reemplazo como innerHTML
  movieTitle.innerHTML = movie.name;
  movieInfo.innerHTML = movie.release;
  movieDirector.innerHTML = movie.director;
}

export default {
  setMovieHeading,
};
