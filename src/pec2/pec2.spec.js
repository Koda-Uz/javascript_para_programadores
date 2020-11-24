import PEC2 from './pec2';

describe('PEC2: Tests', () => {
  const pec2 = new PEC2();

  test('.getMovieCount()', async () => {
    const expected = 6;
    const actual = await pec2.getMovieCount();
    expect(actual).toEqual(expected);
  });

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
    const actual = await pec2.listMovies();
    expect(actual).toEqual(expected);
  });

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
    const actual = await pec2.listMoviesSorted();
    expect(actual).toEqual(expected);
  });

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
    const actual = await pec2.listEvenMoviesSorted();
    expect(actual).toEqual(expected);
  });

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
    const actual = await pec2.getMovieInfo(4);
    expect(actual).toEqual(expected);
  });

  test('.getMovieInfo()', async () => {
    const expected = 'Luke Skywalker';
    const actual = await pec2.getCharacerName('http://swapi.dev/api/people/1/');
    expect(actual).toEqual(expected);
  });

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
    const actual = await pec2.getMovieCharacters(4);
    expect(actual).toEqual(expected);
  });
});
