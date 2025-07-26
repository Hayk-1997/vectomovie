import React, { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { APP_ROUTES } from '../../../../constants/route.js';

const SideBar = () => {
  const [hovered, setHovered] = useState(false);
  const bottomMenu = ['Language', 'Get Help', 'Exit'];

  return (
    <Motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ width: 80 }}
      animate={{ width: hovered ? 220 : 80 }}
      className='bg-black bg-opacity-80 p-4 flex flex-col justify-between absolute w-16 left-0 top-0 z-[99] h-full'
    >
      <div>
        {hovered && (
          <div className='flex items-center gap-2 mb-8'>
            <img
              src='https://i.pravatar.cc/100?img=3'
              alt='avatar'
              className='w-10 h-10 rounded-full'
            />
            <span className='font-bold'>Daniel</span>
          </div>
        )}

        <div className={`flex flex-col gap-[32px] ${!hovered && 'mt-[70px]'}`}>
          {APP_ROUTES.map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-[1rem] py-2 pl-[10px] cursor-pointer hover:text-blue-400 ${item.active && 'active-menu-item'} ${hovered && 'hovered-menu-item'}`}
            >
              <div>
                <img src={item.icon} alt='Icon' className='w-[25px] h-[25px]' />
              </div>
              {hovered && <span>{item.label}</span>}
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-col gap-1 text-sm'>
        {bottomMenu.map((item) => (
          <span
            key={item}
            className='cursor-pointer hover:text-gray-400 overflow-hidden whitespace-nowrap text-ellipsis'
          >
            {item}
          </span>
        ))}
      </div>
    </Motion.div>
  );
};

export default SideBar;
