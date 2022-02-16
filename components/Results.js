import React from 'react';
import Thumbnail from './Thumbnail';

const Results = ({ movies }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  mt-8 mb-20 px-10 sm:px-20 sm:gap-8 gap-5'>
      {movies.map((movie) => (
        <Thumbnail movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default Results;
