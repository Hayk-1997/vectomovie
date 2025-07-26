import React from 'react';
import PlayIcon from '../../Molecules/Icons/PlayIcon.jsx';
import { formatSecondsToHours } from '../../../../helpers/date.js';
import { getImageUrl } from '../../../../helpers/common.js';

const Banner = ({ selectedMovie }) => {
  return (
    <div className='relative z-10 p-10 max-w-3xl pl-[5rem]'>
      <p className='uppercase text-sm text-gray-400 mb-2'>{selectedMovie.Category}</p>
      <img src={getImageUrl(selectedMovie.TitleImage)} alt='logo' className='h-12 mb-4' />
      <div className='text-sm text-gray-300 mb-2'>
        {selectedMovie.ReleaseYear} • {selectedMovie.MpaRating} •{' '}
        {formatSecondsToHours(selectedMovie.Duration)}
      </div>
      <p className='mb-4 text-md text-gray-200'>{selectedMovie.Description}</p>
      <div className='flex flex-col sm:flex-row gap-4'>
        <button className='bg-[#F1F1F1] text-black px-4 py-2 rounded hover:bg-gray-300 w-[240px] h-[72px] text-[32px] rounded-[40px] flex items-center gap-2 justify-center'>
          <PlayIcon />
          Play
        </button>
        <button className='text-white px-4 py-2 rounded hover:bg-gray-600 w-[240px] h-[72px] text-[32px] rounded-[40px] bg-[linear-gradient(128deg,_rgba(39,39,245,0.6)_0%,_rgba(0,22,113,0.6)_100%)] bg-no-repeat bg-origin-padding'>
          More Info
        </button>
      </div>
    </div>
  );
};

export default Banner;
