import pec2 from './pec2';

let movieTitle;
let movieInfo;
let movieDirector;
let movieSelector;
let homeworldSelector;
let charecterCardList;

export async function setMovieHeading(movieId, titleSelector, infoSelector, directorSelector) {
  // Obtenemos los elementos del DOM con QuerySelector y los almacenamos en una variable
  movieTitle = document.querySelector(titleSelector);
  movieInfo = document.querySelector(infoSelector);
  movieDirector = document.querySelector(directorSelector);

  // Rellenamos el header
  _fillMovieHeading(movieId);
}

async function _fillMovieHeading(movieId) {
  if (movieId != 0) {
    // Obtenemos la información de la película llamando al método de pec2.js
    const movie = await pec2.getMovieInfo(movieId);

    // Sustituimos los datos utilizando un método de reemplazo como innerHTML
    movieTitle.innerHTML = movie.name;
    movieInfo.innerHTML = 'Episode ' + movie.episodeID + ' - ' + movie.release;
    movieDirector.innerHTML = 'Director: ' + movie.director;
  } else {
    movieTitle.innerHTML = '';
    movieInfo.innerHTML = '';
    movieDirector.innerHTML = '';
  }
}

export async function initMovieSelect(selector) {
  // Obtenemos los elementos del DOM
  movieSelector = document.querySelector(selector);

  // Obtenemos la lista de películas
  const movieList = await pec2.listMoviesSorted();

  // Añadimos la opción para el caso inicial "Select a movie"
  // creamos una nueva opción
  var opt = document.createElement('option');
  // Le añadimos un nodo de texto
  opt.appendChild(document.createTextNode('Select a movie'));
  // Asignamos la propiedad value
  opt.value = '0';
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

export function initHomeworldSelect(homeworld) {
  homeworldSelector = document.querySelector(homeworld);
  _fillHomeworldSelector(1);
}

export function initCharacterList(characterList) {
  charecterCardList = document.querySelector(characterList);
}

export async function setMovieSelectCallbacks() {
  // Añadimos el event listener al selector
  movieSelector.addEventListener('change', () => {
    _fillMovieHeading(movieSelector.value);
    _emptyHomeworldSelector();
    _fillHomeworldSelector(movieSelector.value);
    _emptyCharacterCardList();
  });
}

function _emptyHomeworldSelector() {
  while (homeworldSelector.firstChild) {
    homeworldSelector.removeChild(homeworldSelector.firstChild);
  }
}

async function _fillHomeworldSelector(id) {
  // Añadimos la opción para el caso inicial "Select a homeworld"
  var opt = document.createElement('option');
  opt.appendChild(document.createTextNode('Select a homeworld'));
  opt.value = '0';
  homeworldSelector.appendChild(opt);

  if (id != 0) {
    // Obtenemos la lista de personajes y planetas
    const charactersAndHomeworlds = await pec2.getMovieCharactersAndHomeworlds(id);

    // Filtramos los planetas y eliminamos duplicidades
    let homeworlds = [];
    charactersAndHomeworlds.characters.forEach((character) => {
      homeworlds.push(character.homeworld);
    });

    homeworlds = homeworlds.filter((item, index) => homeworlds.indexOf(item) == index);

    // Añadimos la lista de planetas al selector
    homeworlds.forEach((homeworld) => {
      opt = document.createElement('option');
      opt.appendChild(document.createTextNode(homeworld));
      homeworldSelector.appendChild(opt);
    });
  }
}

function _emptyCharacterCardList() {
  while (charecterCardList.firstChild) {
    charecterCardList.removeChild(charecterCardList.firstChild);
  }
}

export default {
  setMovieHeading,
  initMovieSelect,
  initHomeworldSelect,
  initCharacterList,
  setMovieSelectCallbacks,
};
