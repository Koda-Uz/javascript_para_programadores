const fetch = require('node-fetch');

// Movie Class
export default class Movie {
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
