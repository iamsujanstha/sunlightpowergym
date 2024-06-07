'use client';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { MdMenu } from 'react-icons/md';

import MobileNav from '@/components/MobileNav';
import Nav from '@/components/Nav';

const Header = () => {
  const [isHeaderActive, setHeaderActive] = useState(false);
  const [isOpenNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderActive(window.scrollY > 50);
    };

    //add scroll event
    window.addEventListener('scroll', handleScroll);

    //clear scroll event
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={clsx(
        isHeaderActive ? 'h-[100px]' : 'h-[124px]',
        'fixed flex  w-full bg-primary-200 transition-all z-20',
      )}
    >
      <div className="container mx-aut w-full flex items-center justify-between">
        <Link href="">
          <Image src={'/assets/img/logo.png'} width={110} height={55} alt="" />
        </Link>
        {/* mobile nav - hidden on large devices */}
        <MobileNav
          containerStyles={clsx(
            isHeaderActive ? 'top-[90px]' : 'top-[124px]',
            isOpenNav
              ? 'max-h-max pt-8 pb-10 border-t border-white/10'
              : 'max-h-0 pt-0 pb-0 overflow-hidden border-white/0',
            'xl:hidden text-white flex flex-col text-center gap-4 text-white fixed bg-primary-200 w-full left-0 top-[124px] text-base uppercase font-medium transition-all',
          )}
        />
        {/* destop nav - hidden on small devices */}
        <Nav containerStyles="flex gap-4 hidden xl:flex text-base uppercase" />
        {/* hide open menu button */}
        <div>
          <button className="text-white xl:hidden" onClick={() => setOpenNav(!isOpenNav)}>
            <MdMenu className="text-4xl" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
