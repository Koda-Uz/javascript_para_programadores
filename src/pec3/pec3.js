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
  movieInfo.innerHTML = 'Episode ' + movie.episodeID + ' - ' + movie.release;
  movieDirector.innerHTML = 'Director: ' + movie.director;
}

async function initMovieSelect(selector) {
  // Obtenemos los elementos del DOM
  const movieSelector = document.querySelector(selector);

  // Obtenemos la lista de películas
  const movieList = await pec2.listMoviesSorted();

  // Añadimos la opción para el caso inicial "Select a movie"
  // creamos una nueva opción
  var opt = document.createElement('option');
  // Le añadimos un nodo de texto
  opt.appendChild(document.createTextNode('Select a movie'));
  // Asignamos la propiedad value
  opt.value = '';
  // Añadimos la opción al selector
  movieSelector.appendChild(opt);

  // Añadimos el listado de peículas al HTML de igual forma que la opción por defecto
  movieList.forEach((movie) => {
    opt = document.createElement('option');
    opt.appendChild(document.createTextNode(movie.name));
    opt.value = movie.episodeID;
    movieSelector.appendChild(opt);
  });
}

export default {
  setMovieHeading,
  initMovieSelect,
};
