import Image from 'next/image'
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AccountBox, Settings } from '@mui/icons-material';
const Navbar = () => {
  return (
    <nav className="flex bg-black h-fit w-full items-center justify-between p-2.5 border-b-2 border-gray-4">
      <div className='flex gap-7 p-2.5'>
        <a href="/explore" className="text-lg text-white">Explore</a>
        <a href="/brainstorm" className="text-lg text-white">Brainstorm</a>
        <a href="/image-studio" className="text-lg text-white">Image Studio</a>
      </div>
      <div className='flex flex-row items-center gap-2.5'>
        <input className='bg-gray-4 text-sm text-white-pitch p-2.5 rounded-lg' type="text" placeholder='Find anything...' />
        <a href="/account">
          <AccountCircleIcon sx={{ fontSize: 32, color: 'white'}} />
        </a>
        <a href="/settings">
          <Settings sx={{ fontSize: 32, color: 'white'}} />
        </a>
      </div>
    </nav>
  )
}

export default Navbar