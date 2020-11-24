const fetch = require('node-fetch');

export default class PEC2 {
  async getMovieCount() {
    let response = await fetch('https://swapi.dev/api/films/');
    let json = await response.json();
    return json.count;
  }

  async listMovies() {
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

  async listMoviesSorted() {
    let films = await this.listMovies();
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
}
