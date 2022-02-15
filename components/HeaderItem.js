import React from 'react';

const HeaderItem = ({ Icon, title }) => {
  return (
    <div className='font-medium text-sm sm:text-base flex hover:text-white flex-col items-center group cursor-pointer w-12 sm:w-20 '>
      <Icon className='h-8 mb-1 group-hover:animate-bounce' />
      <p className='tracking-widest  opacity-0 group-hover:opacity-100 '>
        {title}
      </p>
    </div>
  );
};

export default HeaderItem;
