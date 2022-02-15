import React from 'react';
import Thumbnail from './Thumbnail';

const Results = ({ movies }) => {
  return (
    <div className='grid grid-cols-1 mt-8 px-10 sm:px-20 gap-8'>
      {movies.map((movie) => (
        <Thumbnail movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default Results;
