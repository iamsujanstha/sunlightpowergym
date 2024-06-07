import React from 'react'

import MobileNav from '@/components/MobileNav'
import Nav from '@/components/Nav'

const Header = () => {
  return (
    <header className='fixed left-0 right-0 w-full bg-white h-[90px]'>
      <div className='container mx-auto'>
        {/* mobile nav - hidden on large devices */}
        <MobileNav />
        {/* destop nav - hidden on small devices */}
        <Nav containerStyles='flex gap-4 hidden xl:flex' />
      </div>
    </header>
  )
}

export default Header