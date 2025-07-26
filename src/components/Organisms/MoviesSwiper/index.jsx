import React, { useMemo, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import { orderMovies } from '../../../../helpers/movies.js';
import { TendingNow as Movies } from '../../../mock.json';
import { getImageUrl } from '../../../../helpers/common.js';

import 'swiper/css/navigation';
import 'swiper/css';

const MoviesSwiper = ({ setSelectedMovie, selectedMovie }) => {
  const sliderRef = useRef(null);
  const [firstRender, setFirstRender] = useState(true);
  const sortedMovies = useMemo(() => {
    if (firstRender) {
      return orderMovies(Movies, localStorage.getItem('selectedMovieId') ?? selectedMovie.Id);
    }
    return orderMovies(Movies);
  }, [selectedMovie, firstRender]);

  const handleSelectMovie = (movie) => {
    localStorage.setItem('selectedMovieId', movie.Id);
    setFirstRender(false);
    setSelectedMovie(movie);
  };

  return (
    <div className='flex flex-col gap-[2rem] pl-[5rem]'>
      <div className='z-[1] text-[32px] text-[#F1F1F1]'>Trending Now</div>
      <div className='overflow-x-auto flex gap-4'>
        <Swiper
          ref={sliderRef}
          slidesPerView={6}
          mousewheel={true}
          modules={[Mousewheel]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            500: {
              slidesPerView: 2,
            },
            1000: {
              slidesPerView: 4,
              spaceBetween: 8,
            },
            1200: {
              slidesPerView: 8,
              spaceBetween: 8,
            },
          }}
        >
          {sortedMovies.map((item, key) => (
            <SwiperSlide key={key}>
              <div className='group flex flex-col items-center'>
                <div
                  className={`bg-[#F2F3F8] flex items-center justify-center mb-4 cursor-pointer ${item.Id === selectedMovie.Id && 'border-4 border-blue-500'}`}
                  onClick={() => handleSelectMovie(item)}
                >
                  <img src={getImageUrl(item.CoverImage)} alt='movie' />
                </div>

                <div className='flex justify-center'>
                  <h3 className='inline-block font-medium text-center text-dark bg-gradient-to-r from-blue to-blue bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px] group-hover:text-blue'>
                    {item.Title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MoviesSwiper;
