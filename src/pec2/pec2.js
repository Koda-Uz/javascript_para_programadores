const fetch = require('node-fetch');

async function getMovieCount() {
  let response = await fetch('https://swapi.dev/api/films/');
  let json = await response.json();
  return json.count;
}

async function listMovies() {
  let response = await fetch('https://swapi.dev/api/films/');
  let json = await response.json();
  let films = [];
  json.results.forEach((film) => {
    films.push({
      name: film.title,
      director: film.director,
      release: film.release_date,
      episodeID: film.episode_id,
    });
  });
  return films;
}

async function listMoviesSorted() {
  let films = await listMovies();
  films.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  return films;
}

async function listEvenMoviesSorted() {
  let films = await listMovies();
  let selectedFilms = [];
  films.forEach((film) => {
    if (film.episodeID % 2 == 0) {
      selectedFilms.push(film);
    }
  });
  selectedFilms.sort(function (a, b) {
    if (a.episodeID < b.episodeID) {
      return -1;
    }
    if (a.episodeID > b.episodeID) {
      return 1;
    }
    return 0;
  });
  return selectedFilms;
}

async function getMovieInfo(id) {
  let response = await fetch('https://swapi.dev/api/films/');
  let json = await response.json();
  let selectedFilm;
  json.results.forEach((film) => {
    if (film.episode_id == id) {
      selectedFilm = {
        name: film.title,
        episodeID: film.episode_id,
        characters: film.characters,
      };
    }
  });
  return selectedFilm;
}

async function getCharacterName(url) {
  // Necesario para los siguientes apartados
  url = url.replace('http://', 'https://');

  let response = await fetch(url);
  let res = await response.json();
  return res.name;
}

async function getMovieCharacters(id) {
  let film = await getMovieInfo(id);
  let promises = [];
  film.characters.forEach((character) => {
    promises.push(
      new Promise((resolve, reject) => {
        return resolve(getCharacterName(character));
      })
    );
  });
  film.characters = await Promise.all(promises);
  return film;
}

// Exercise 6
async function getPlanetName(url) {
  url = url.replace('http://', 'https://');

  let response = await fetch(url);
  let res = await response.json();
  return res.name;
}

async function getCharacterNameAndHomeworld(url) {
  url = url.replace('http://', 'https://');

  let response = await fetch(url);
  let res = await response.json();
  let homeworld = await getPlanetName(res.homeworld);
  return {
    name: res.name,
    homewolrd: homeworld,
  };
}

async function getMovieCharactersAndHomeworlds(id) {
  let film = await this.getMovieInfo(id);
  let promises = [];
  film.characters.forEach((character) => {
    promises.push(
      new Promise((resolve, reject) => {
        return resolve(getCharacterNameAndHomeworld(character));
      })
    );
  });
  film.characters = await Promise.all(promises);
  return film;
}

//Exercise 7 and 8
async function createMovie(id) {
  const movie = await getMovieInfo(id);
  if (movie != undefined) {
    return new Movie(movie.name, movie.characters);
  } else {
    throw new Error('Movie does not exist');
  }
}

// Movie Class
class Movie {
  constructor(name, characters) {
    this.name = name;
    this.characters = characters;
  }

  // Auxiliary functions
  async getCharacterInfo(url) {
    // Necesario para los siguientes apartados
    url = url.replace('http://', 'https://');

    let response = await fetch(url);
    let res = await response.json();
    return res;
  }

  async getAllCharactersInfo() {
    let promises = [];
    this.characters.forEach((character) => {
      promises.push(
        new Promise((resolve, reject) => {
          return resolve(this.getCharacterInfo(character));
        })
      );
    });
    return await Promise.all(promises);
  }

  async getPlanetName(url) {
    url = url.replace('http://', 'https://');

    let response = await fetch(url);
    let res = await response.json();
    return res.name;
  }

  // Required functions
  async getCharacters() {
    let names = [];
    let characters = await this.getAllCharactersInfo();
    characters.forEach((character) => {
      names.push(character.name);
    });
    return names;
  }

  async getHomeworlds() {
    let promises = [];
    let characters = await this.getAllCharactersInfo();
    characters.forEach((character) => {
      promises.push(
        new Promise((resolve, reject) => {
          return resolve(this.getPlanetName(character.homeworld));
        })
      );
    });

    return Promise.all(promises);
  }

  async getHomeworldsReverse() {
    let homeworldsReversed = await this.getHomeworlds();

    homeworldsReversed.sort(function (a, b) {
      if (a < b) {
        return 1;
      }
      if (a > b) {
        return -1;
      }
      return 0;
    });

    return homeworldsReversed;
  }
}

export {
  getMovieCount,
  listMovies,
  listMoviesSorted,
  listEvenMoviesSorted,
  getMovieInfo,
  getCharacterName,
  getMovieCharacters,
  getMovieCharactersAndHomeworlds,
  createMovie,
  Movie,
};
