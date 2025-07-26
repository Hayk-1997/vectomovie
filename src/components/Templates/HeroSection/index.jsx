import React, { useCallback, useEffect, useRef, useState } from 'react';
import Banner from '../../Organisms/Banner';
import MoviesSwiper from '../../Organisms/MoviesSwiper';
import { getImageUrl, getVideoUrl } from '../../../../helpers/common.js';
import { getDefaultMovie } from '../../../../helpers/movies.js';

import { Featured as DefaultMovie, TendingNow as Movies } from '../../../mock.json';

const HeroSection = () => {
  const videoRef = useRef(null);
  const [selectedMovie, setSelectedMovie] = useState(DefaultMovie);
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('selectedMovieId')) {
      setSelectedMovie(getDefaultMovie(Movies, localStorage.getItem('selectedMovieId')));
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTrailer(true);
      videoRef.current?.play();
    }, 2000);

    return () => clearTimeout(timer);
  }, [videoRef, showTrailer]);

  const handleSelectMovie = useCallback((movie) => {
    setSelectedMovie(movie);
    setShowTrailer(false);
  }, []);

  return (
    <div className='relative flex flex-col justify-between h-full w-full'>
      {showTrailer ? (
        <video
          className='absolute inset-0 w-full h-full object-cover'
          src={getVideoUrl(selectedMovie.VideoUrl)}
          ref={videoRef}
          muted
          loop
        />
      ) : (
        <div
          className='absolute bg-cover bg-center h-full w-full'
          style={{ backgroundImage: `url(${getImageUrl(selectedMovie.CoverImage)})` }}
        />
      )}
      <div className='absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80'></div>
      <Banner selectedMovie={selectedMovie} />
      <MoviesSwiper setSelectedMovie={handleSelectMovie} selectedMovie={selectedMovie} />
    </div>
  );
};
export default HeroSection;
