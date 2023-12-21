import React from 'react'
import Logo from './Logo'
import SearchBar from './SearchBar'
import NavItem from './NavItem'

const Header = () => {
  return (
    <div className='flex h-[60px] items-center justify-evenly'>
      <Logo/>
      <SearchBar/>
      <NavItem/>
    </div>
  )
}

export default Header