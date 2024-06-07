import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

import useMediaQuery from '@/hooks/useMediaQuery';

const links = [
  {
    name: 'home',
    target: 'home',
    offset: -100,
  },
  {
    name: 'about',
    target: 'about',
    offset: -100,
  },
  {
    name: 'prices',
    target: 'prices',
    offset: -40,
  },
  {
    name: 'testimonial',
    target: 'testimonial',
    offset: 0,
  },
  {
    name: 'blog',
    target: 'blog',
    offset: 0,
  },
  {
    name: 'contact',
    target: 'contact',
    offset: 0,
  },
];

const MobileNav = ({ containerStyles }: { containerStyles: string }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <ScrollLink
            to={link.target}
            key={index}
            smooth
            offset={link.offset}
            spy
            activeClass={`${!isMobile && 'active'}`}
            className="cursor-pointer hover:text-accent transition-all text-white"
          >
            {link.name}
          </ScrollLink>
        );
      })}
    </nav>
  );
};

export default MobileNav;
