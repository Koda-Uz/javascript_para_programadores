import pec2 from './pec2';
import user_image from '../assets/user.svg';

let movieTitle;
let movieInfo;
let movieDirector;
let movieSelector;
let homeworldSelector;
let charecterCardList;

/*
 * Álvaro Pérez Gómez
 */

/*
 ****************
 ** Exercise 1 **
 ****************
 */
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
    // Si el id es 0 (ningún valor seleccionado)
    // boorramos los campos
    movieTitle.innerHTML = '';
    movieInfo.innerHTML = '';
    movieDirector.innerHTML = '';
  }
}

/*
 ****************
 ** Exercise 2 **
 ****************
 */
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

/*
 ********************
 ** Init Functions **
 ********************
 */

// Obtiene el selector de mundos del DOM
export function initHomeworldSelect(homeworld) {
  homeworldSelector = document.querySelector(homeworld);
  _fillHomeworldSelector(1);
}

// Obtiene la lista de personajes del DOM
export function initCharacterList(characterList) {
  charecterCardList = document.querySelector(characterList);
}

/*
 ****************
 ** Exercise 3 **
 ****************
 */
export async function setMovieSelectCallbacks() {
  // Añadimos el event listener al selector
  movieSelector.addEventListener('change', () => {
    // Rellena el Header de la página
    _fillMovieHeading(movieSelector.value);
    // Vacía el selector de mundos
    _emptyHomeworldSelector();
    // LLena el selector de mundos con los planets de la película seleccionada
    _fillHomeworldSelector(movieSelector.value);
    // Vacía la lista de personajes
    _emptyCharacterCardList();
  });
}

/*
 ****************
 ** Exercise 4 **
 ****************
 */

// Elimina los valores del selector de mundos
function _emptyHomeworldSelector() {
  while (homeworldSelector.firstChild) {
    homeworldSelector.removeChild(homeworldSelector.firstChild);
  }
}

// LLena el selector de mundos con los planetas presentes en la película seleccionada
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
      opt.value = homeworld;
      homeworldSelector.appendChild(opt);
    });
  }
}

// Elimina los elementos de la lista de personajes
function _emptyCharacterCardList() {
  while (charecterCardList.firstChild) {
    charecterCardList.removeChild(charecterCardList.firstChild);
  }
}

/*
 ****************
 ** Exercise 5 **
 ****************
 */

// Añade el evento al seletor de mundos
export function addChangeEventToSelectHomeworld() {
  homeworldSelector.addEventListener('change', () => _changeCharacterList());
}

// Actualiza la lista de personajes
async function _changeCharacterList() {
  // vacía la lista
  _emptyCharacterCardList();
  // Comprueba que ambos selectores tengan un valor asignado
  if (movieSelector.value != 0 && homeworldSelector.value != 0) {
    // obtiene la información dela peícula
    let movie = await pec2.getMovieCharactersAndHomeworlds(movieSelector.value);
    // obtiene los personajes de el mundo seleccionado
    let characters = _filterCharactersByHomeworld(movie.characters, homeworldSelector.value);
    // Rellena la lista con estos personajes
    _fillCharactersList(characters);
  }
}

// filtra una lista de personajes dejando unicamente los pertenecientes al planeta deseado
function _filterCharactersByHomeworld(characters, homeworld) {
  let selectedCharacters = [];
  characters.forEach((character) => {
    if (character.homeworld == homeworld) {
      selectedCharacters.push(character);
    }
  });
  return selectedCharacters;
}

// Rellena las fichas de los personajes
function _fillCharactersList(characters) {
  characters.forEach((character) => {
    console.log(character);
    _createCharacterCard(character);
  });
}

// Crea una ficha de personaje nueva y la añade al DOM
function _createCharacterCard(character) {
  // Card
  var characterCard = document.createElement('li');
  characterCard.className = 'list__item item character';

  // Image
  var img = document.createElement('img');
  img.src = user_image;
  img.className = 'character__image';

  // Header
  var header = document.createElement('h2');
  header.className = 'character__name';
  header.innerHTML = character.name;

  // Birth
  var birth = document.createElement('div');
  birth.className = 'character__birth';
  birth.innerHTML = '<strong>Birth Year: </strong>' + character.birth_year;

  // Eye color
  var eye = document.createElement('div');
  eye.className = 'character__eye';
  eye.innerHTML = '<strong>Eye Color: </strong>' + character.eye_color;

  // Gender
  var gender = document.createElement('div');
  gender.className = 'character__gender';
  gender.innerHTML = '<strong>Gender: </strong>' + character.gender;

  // Homeworld
  var homeworld = document.createElement('div');
  homeworld.className = 'character__home';
  homeworld.innerHTML = '<strong>Homeworld: </strong>' + character.homeworld;

  characterCard.appendChild(img);
  characterCard.appendChild(header);
  characterCard.appendChild(birth);
  characterCard.appendChild(eye);
  characterCard.appendChild(gender);
  characterCard.appendChild(homeworld);

  // Añade la ficha al DOM
  charecterCardList.appendChild(characterCard);
}

/*
 *********************
 ** Exports Section **
 *********************
 */
export default {
  setMovieHeading,
  initMovieSelect,
  initHomeworldSelect,
  initCharacterList,
  setMovieSelectCallbacks,
  addChangeEventToSelectHomeworld,
};
