import React from 'react'
import Icon from './Icon'
const Navbar = () => {
  return (
    <nav className="flex bg-black h-fit w-full items-center justify-between p-2.5 border-b-2 border-gray-4">

      <div className='flex gap-7 p-2.5'>
        <a href="/explore" className="text-lg text-white">Explore</a>
        <a href="/brainstorm" className="text-lg text-white">Brainstorm</a>
        <a href="/image-studio" className="text-lg text-white">Image Studio</a>
      </div>

      <div className='flex flex-row items-center gap-2.5'>
        <input className='bg-gray-4 focus:outline-0 text-sm text-white-pitch p-2.5 rounded-lg' type="text" placeholder='Find anything...' />
        <a className="hover:rotate-45 transition-all" href="/settings">
          <Icon name="settings" size={32} />
        </a>
      </div>

    </nav>
  )
}

export default Navbar