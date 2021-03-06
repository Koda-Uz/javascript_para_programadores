import fetch from 'node-fetch';
export function getMovieCount() {
  return fetch('https://swapi.dev/api/films/')
    .then((e) => e.json())
    .then((e) => e.count);
}
export function listMovies() {
  return fetch('https://swapi.dev/api/films/')
    .then((e) => e.json())
    .then((e) => e.results)
    .then((e) =>
      e.map((e) => ({
        name: e.title,
        director: e.director,
        release: e.release_date,
        episodeID: e.episode_id,
      }))
    );
}
export async function listMoviesSorted() {
  return (await listMovies()).sort(compareByName);
}
export async function listEvenMoviesSorted() {
  return (await listMovies()).filter((e) => e.episodeID % 2 == 0).sort(_compareByEpisodeId);
}
export function getMovieInfo(e) {
  return fetch(`https://swapi.dev/api/films/${e}/`)
    .then((e) => e.json())
    .then((e) => ({
      name: e.title,
      episodeID: e.episode_id,
      characters: e.characters,
      director: e.director,
      release: e.release_date,
      episodeID: e.episode_id,
    }));
}
export function getCharacterName(e) {
  return (
    (e = e.replace('http://', 'https://')),
    fetch(e)
      .then((e) => e.json())
      .then((e) => e.name)
  );
}
export async function getMovieCharacters(e) {
  const t = await getMovieInfo(e);
  return (t.characters = await _getCharacterNames(t)), t;
}
export async function getMovieCharactersAndHomeworlds(e) {
  const t = await getMovieInfo(e);
  return (t.characters = await _getCharacterNamesAndHomeWorlds(t)), t;
}
async function _getCharacterNames(e) {
  return await Promise.all(e.characters.map(getCharacterName));
}
async function _getCharacterNamesAndHomeWorlds(e) {
  return await Promise.all(e.characters.map(_getCharacterNameAndHomeworld));
}
async function _getCharacterNameAndHomeworld(e) {
  e = e.replace('http://', 'https://');
  const t = await fetch(e),
    r = await t.json(),
    a = {
      name: r.name,
      birth_year: r.birth_year,
      eye_color: r.eye_color,
      gender: r.gender,
      homeworld: r.homeworld,
    };
  return (a.homeworld = await _getHomeWorldName(a.homeworld)), a;
}
async function _getHomeWorldName(e) {
  return (
    (e = e.replace('http://', 'https://')),
    fetch(e)
      .then((e) => e.json())
      .then((e) => e.name)
  );
}
function compareByName(e, t) {
  return e.name < t.name ? -1 : e.name > t.name ? 1 : 0;
}
function _compareByEpisodeId(e, t) {
  return parseFloat(e.episodeID) - parseFloat(t.episodeID);
}
async function createMovie(e) {
  const t = await getMovieInfo(e);
  return new Movie(t.name, t.characters);
}
export class Movie {
  constructor(e, t) {
    (this.name = e), (this.characterUrls = t);
  }
  async getCharacters() {
    return Promise.all(this.characterUrls.map(getCharacterName));
  }
  async getHomeworlds() {
    const e = (await Promise.all(this.characterUrls.map(_getCharacterNameAndHomeworld))).map(
        (e) => e.homeworld
      ),
      t = new Set(e);
    return Array.from(t);
  }
  async getHomeworldsReverse() {
    return (await this.getHomeworlds()).sort().reverse();
  }
}
export default {
  getMovieCount: getMovieCount,
  listMovies: listMovies,
  listMoviesSorted: listMoviesSorted,
  listEvenMoviesSorted: listEvenMoviesSorted,
  getMovieInfo: getMovieInfo,
  getCharacterName: getCharacterName,
  getMovieCharacters: getMovieCharacters,
  getMovieCharactersAndHomeworlds: getMovieCharactersAndHomeworlds,
  createMovie: createMovie,
  compareByName: compareByName,
};
