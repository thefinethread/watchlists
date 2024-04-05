import React, { useState } from 'react';
import MoviesList from './MoviesList';

const res = {
  Search: [
    {
      Title: 'Shinchan',
      Year: '1992–',
      imdbID: 'tt12853970',
      Type: 'series',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BN2VmOWRlMjEtY2M1NC00NjdmLTg1MjktMDYxNzg3ZTNiMDUxXkEyXkFqcGdeQXVyNTk5ODg4NDA@._V1_SX300.jpg',
    },
    {
      Title: 'Kureyon Shinchan: Action Kamen vs Haigure Maô',
      Year: '1993',
      imdbID: 'tt0409848',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOGY5YzI5ZjEtNDNiNy00MzFjLWFkOGQtNGJmOTE5MWRhYjIzXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_SX300.jpg',
    },
    {
      Title: 'Kureyon Shinchan: Buriburi Ôkoku no hihô',
      Year: '1994',
      imdbID: 'tt0477602',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BZWY5ZmMwZjEtODcyNi00ZGViLTgyYzAtZTFmNDMyYjYwYmVmXkEyXkFqcGdeQXVyNjYxMzkwODM@._V1_SX300.jpg',
    },
    {
      Title: 'Crayon Shinchan Super Dimension the Storm Called My Bride',
      Year: '2010',
      imdbID: 'tt1623674',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjZjZTA2NDAtOTYxMS00ZDIyLTliMjAtYzhhZGVlMjc0NmY5XkEyXkFqcGdeQXVyNjY4NjQwNTA@._V1_SX300.jpg',
    },
    {
      Title: 'Eiga Kureyon Shinchan: Gachinko! Gyakushuu no Robotôchan',
      Year: '2014',
      imdbID: 'tt3871940',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNTJhOTE2MGMtMjYxNS00ZWUyLTljYzctYTEwMzU2YmM2ZTIyXkEyXkFqcGdeQXVyMjExMzEyNTM@._V1_SX300.jpg',
    },
    {
      Title: 'Kureyon Shinchan: Bakusui! Yumemî wârudo daitotsugeki!',
      Year: '2016',
      imdbID: 'tt5526456',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNmUyNGUyYzItMmM2Yi00ZTdiLWEyYzAtM2QyNjRhOThiODE4XkEyXkFqcGdeQXVyMjA4MzgxNjg@._V1_SX300.jpg',
    },
    {
      Title: 'Shinchan: Crash! Scribble Kingdom and Almost Four Heroes',
      Year: '2020',
      imdbID: 'tt12850062',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMDczN2FjNDQtMGZhMC00NjljLWE2ZjQtYzU5YWQ5ZjA0OTIxXkEyXkFqcGdeQXVyNTk5ODg4NDA@._V1_SX300.jpg',
    },
    {
      Title: 'Kureyon Shinchan: Arashi wo yobu! Yuuhi no kasukabe bôizu',
      Year: '2004',
      imdbID: 'tt0769760',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNzZjMzU0OWMtZDY4MS00MzgxLThlZjAtODhjZjE5YWMyZjBkXkEyXkFqcGdeQXVyNjYxMzkwODM@._V1_SX300.jpg',
    },
    {
      Title: 'Eiga Kureyon Shinchan: Bakauma! B-kyu gurume sabaibaru!!',
      Year: '2013',
      imdbID: 'tt2876906',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTJkM2RmNjktNjc5Zi00YzA5LTg5NzYtNzBiNjlkYWVhZTE5XkEyXkFqcGdeQXVyMjA4MzgxNjg@._V1_SX300.jpg',
    },
    {
      Title: 'Kureyon Shinchan: Arashi o yobu ougon no supai daisakusen',
      Year: '2011',
      imdbID: 'tt1887784',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNmQ3ZTA4ZWMtZGU0ZS00NjE4LTg2N2EtOWUyZTZjNjMyNjFhXkEyXkFqcGdeQXVyMjA4MzgxNjg@._V1_SX300.jpg',
    },
  ],
  totalResults: '24',
  Response: 'True',
};

const MyWatchList = () => {
  const [watchList, setWatchList] = useState(res.Search);

  return (
    <main className=' w-full pb-10'>
      <h1 className='text-center font-semibold text-5xl my-8'>
        {' '}
        My WatchList{' '}
      </h1>
      <section className='w-full flex justify-center'>
        {watchList && <MoviesList movies={watchList} />}
      </section>
    </main>
  );
};

export default MyWatchList;
