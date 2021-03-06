// PEC2: Álvaro Pérez Gómez
import m from './pec2';

describe('PEC2: Tests', () => {
  // Exercise 1
  test('.getMovieCount()', async () => {
    const expected = 6;
    const actual = await m.getMovieCount();
    expect(actual).toEqual(expected);
  });

  // Exercise 2
  test('.listMovies()', async () => {
    const expected = [
      {
        name: 'A New Hope',
        director: 'George Lucas',
        release: '1977-05-25',
        episodeID: 4,
      },
      {
        name: 'The Empire Strikes Back',
        director: 'Irvin Kershner',
        release: '1980-05-17',
        episodeID: 5,
      },
      {
        name: 'Return of the Jedi',
        director: 'Richard Marquand',
        release: '1983-05-25',
        episodeID: 6,
      },
      {
        name: 'The Phantom Menace',
        director: 'George Lucas',
        release: '1999-05-19',
        episodeID: 1,
      },
      {
        name: 'Attack of the Clones',
        director: 'George Lucas',
        release: '2002-05-16',
        episodeID: 2,
      },
      {
        name: 'Revenge of the Sith',
        director: 'George Lucas',
        release: '2005-05-19',
        episodeID: 3,
      },
    ];
    const actual = await m.listMovies();
    expect(actual).toEqual(expected);
  });

  // Exercise 3
  test('.listMoviesSorted()', async () => {
    const expected = [
      {
        name: 'A New Hope',
        director: 'George Lucas',
        release: '1977-05-25',
        episodeID: 4,
      },
      {
        name: 'Attack of the Clones',
        director: 'George Lucas',
        release: '2002-05-16',
        episodeID: 2,
      },
      {
        name: 'Return of the Jedi',
        director: 'Richard Marquand',
        release: '1983-05-25',
        episodeID: 6,
      },
      {
        name: 'Revenge of the Sith',
        director: 'George Lucas',
        release: '2005-05-19',
        episodeID: 3,
      },
      {
        name: 'The Empire Strikes Back',
        director: 'Irvin Kershner',
        release: '1980-05-17',
        episodeID: 5,
      },
      {
        name: 'The Phantom Menace',
        director: 'George Lucas',
        release: '1999-05-19',
        episodeID: 1,
      },
    ];
    const actual = await m.listMoviesSorted();
    expect(actual).toEqual(expected);
  });

  // Exercise 4
  test('.listEvenMoviesSorted()', async () => {
    const expected = [
      {
        name: 'Attack of the Clones',
        director: 'George Lucas',
        release: '2002-05-16',
        episodeID: 2,
      },
      {
        name: 'A New Hope',
        director: 'George Lucas',
        release: '1977-05-25',
        episodeID: 4,
      },
      {
        name: 'Return of the Jedi',
        director: 'Richard Marquand',
        release: '1983-05-25',
        episodeID: 6,
      },
    ];
    const actual = await m.listEvenMoviesSorted();
    expect(actual).toEqual(expected);
  });

  // Exercise 5,1
  test('.getMovieInfo()', async () => {
    const expected = {
      characters: [
        'http://swapi.dev/api/people/1/',
        'http://swapi.dev/api/people/2/',
        'http://swapi.dev/api/people/3/',
        'http://swapi.dev/api/people/4/',
        'http://swapi.dev/api/people/5/',
        'http://swapi.dev/api/people/6/',
        'http://swapi.dev/api/people/7/',
        'http://swapi.dev/api/people/8/',
        'http://swapi.dev/api/people/9/',
        'http://swapi.dev/api/people/10/',
        'http://swapi.dev/api/people/12/',
        'http://swapi.dev/api/people/13/',
        'http://swapi.dev/api/people/14/',
        'http://swapi.dev/api/people/15/',
        'http://swapi.dev/api/people/16/',
        'http://swapi.dev/api/people/18/',
        'http://swapi.dev/api/people/19/',
        'http://swapi.dev/api/people/81/',
      ],
      episodeID: 4,
      name: 'A New Hope',
    };
    const actual = await m.getMovieInfo(4);
    expect(actual).toEqual(expected);
  });

  // Exercise 5.2
  test('.getCharacterName()', async () => {
    const expected = 'Luke Skywalker';
    const actual = await m.getCharacterName('http://swapi.dev/api/people/1/');
    expect(actual).toEqual(expected);
  });

  // Exercise 5.3
  test('.getMovieCharacters()', async () => {
    const expected = {
      characters: [
        'Luke Skywalker',
        'C-3PO',
        'R2-D2',
        'Darth Vader',
        'Leia Organa',
        'Owen Lars',
        'Beru Whitesun lars',
        'R5-D4',
        'Biggs Darklighter',
        'Obi-Wan Kenobi',
        'Wilhuff Tarkin',
        'Chewbacca',
        'Han Solo',
        'Greedo',
        'Jabba Desilijic Tiure',
        'Wedge Antilles',
        'Jek Tono Porkins',
        'Raymus Antilles',
      ],
      episodeID: 4,
      name: 'A New Hope',
    };
    const actual = await m.getMovieCharacters(4);
    expect(actual).toEqual(expected);
  });

  // Exercise 6
  test('.getMovieCharactersAndHomeworlds()', async () => {
    const expected = {
      characters: [
        { homewolrd: 'Tatooine', name: 'Luke Skywalker' },
        { homewolrd: 'Tatooine', name: 'C-3PO' },
        { homewolrd: 'Naboo', name: 'R2-D2' },
        { homewolrd: 'Tatooine', name: 'Darth Vader' },
        { homewolrd: 'Alderaan', name: 'Leia Organa' },
        { homewolrd: 'Tatooine', name: 'Owen Lars' },
        { homewolrd: 'Tatooine', name: 'Beru Whitesun lars' },
        { homewolrd: 'Tatooine', name: 'R5-D4' },
        { homewolrd: 'Tatooine', name: 'Biggs Darklighter' },
        { homewolrd: 'Stewjon', name: 'Obi-Wan Kenobi' },
        { homewolrd: 'Eriadu', name: 'Wilhuff Tarkin' },
        { homewolrd: 'Kashyyyk', name: 'Chewbacca' },
        { homewolrd: 'Corellia', name: 'Han Solo' },
        { homewolrd: 'Rodia', name: 'Greedo' },
        { homewolrd: 'Nal Hutta', name: 'Jabba Desilijic Tiure' },
        { homewolrd: 'Corellia', name: 'Wedge Antilles' },
        { homewolrd: 'Bestine IV', name: 'Jek Tono Porkins' },
        { homewolrd: 'Alderaan', name: 'Raymus Antilles' },
      ],
      episodeID: 4,
      name: 'A New Hope',
    };
    const actual = await m.getMovieCharactersAndHomeworlds(4);
    expect(actual).toEqual(expected);
  });

  // Exercise 7
  test('Movie.name', async () => {
    const expected = 'A New Hope';
    const movie = await m.createMovie(4);
    expect(movie.name).toEqual(expected);
  });

  test('Movie.getCharcters()', async () => {
    const expected = [
      'Luke Skywalker',
      'C-3PO',
      'R2-D2',
      'Darth Vader',
      'Leia Organa',
      'Owen Lars',
      'Beru Whitesun lars',
      'R5-D4',
      'Biggs Darklighter',
      'Obi-Wan Kenobi',
      'Wilhuff Tarkin',
      'Chewbacca',
      'Han Solo',
      'Greedo',
      'Jabba Desilijic Tiure',
      'Wedge Antilles',
      'Jek Tono Porkins',
      'Raymus Antilles',
    ];
    const movie = await m.createMovie(4);
    const actual = await movie.getCharacters();
    expect(actual).toEqual(expected);
  });

  test('Movie.getHomeworlds()', async () => {
    const expected = [
      'Tatooine',
      'Tatooine',
      'Naboo',
      'Tatooine',
      'Alderaan',
      'Tatooine',
      'Tatooine',
      'Tatooine',
      'Tatooine',
      'Stewjon',
      'Eriadu',
      'Kashyyyk',
      'Corellia',
      'Rodia',
      'Nal Hutta',
      'Corellia',
      'Bestine IV',
      'Alderaan',
    ];
    const movie = await m.createMovie(4);
    const actual = await movie.getHomeworlds();
    expect(actual).toEqual(expected);
  });

  test('Movie.getHomeworldsReverse()', async () => {
    const expected = [
      'Tatooine',
      'Tatooine',
      'Tatooine',
      'Tatooine',
      'Tatooine',
      'Tatooine',
      'Tatooine',
      'Stewjon',
      'Rodia',
      'Nal Hutta',
      'Naboo',
      'Kashyyyk',
      'Eriadu',
      'Corellia',
      'Corellia',
      'Bestine IV',
      'Alderaan',
      'Alderaan',
    ];
    const movie = await m.createMovie(4);
    const actual = await movie.getHomeworldsReverse();
    expect(actual).toEqual(expected);
  });

  // Exercise 8
  test('.createMovie() throws error', async () => {
    await expect(m.createMovie(777)).rejects.toEqual(Error('Movie does not exist'));
  });
});
