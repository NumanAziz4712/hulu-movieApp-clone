import Image from 'next/image';
import React from 'react';
import Logo from '../components/data/logo.png';
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchCircleIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/outline';
import HeaderItem from './HeaderItem';
const Header = () => {
  return (
    <header className=' flex m-5 items-center flex-col justify-between sm:flex-row'>
      <div className='flex mt-2 mb-2 gap-4 sm:gap-1 flex-grow max-w-2xl '>
        <HeaderItem title='HOME' Icon={HomeIcon} />
        <HeaderItem title='TRENDING' Icon={LightningBoltIcon} />
        <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
        <HeaderItem title='COLLECTIONS' Icon={CollectionIcon} />
        <HeaderItem title='SEARCH' Icon={SearchIcon} />
        <HeaderItem title='ACCOUNT' Icon={UserIcon} />
      </div>
      <div className='mr-5'>
        <Image src={Logo} objectFit='contain' width={100} height={40} />
      </div>
    </header>
  );
};

export default Header;
