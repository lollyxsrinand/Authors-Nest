'use client'
import React from 'react'
import Icon from '../components/Icon'

type ChildProps = {
  isBold: boolean
  setIsBold: React.Dispatch<React.SetStateAction<boolean>>
}

const Topbar = ({isBold, setIsBold} : ChildProps) => {

  const toggleBold = () => {
    setIsBold(!isBold)
    document.execCommand('bold')
  }
  return (
    <div className="w-full flex flex-col outline outline-neutral-700">
      <div className="flex h-16 w-full justify-between items-center ">
        <div className='flex justify-center items-center gap-2.5'>
          <div className='p-2.5 flex '>
            <Icon name='globe' size={18} />
            <h1 className='p-2.5 font-semibold'>Chapter 1: The not beginning</h1>
          </div>
          <div className="flex justify-center items-center gap-2.5">
            <Icon name="globe" size={12} />
            <p className="text-[12px] text-neutral-500">main branch</p>
          </div>
        </div>

        <button className='button'>
          Save
        </button>
      </div>

      <button onClick={toggleBold} className={`${isBold ? "bg-white text-black":"bg-neutral-900 text-white"} h-6 w-6 rounded-md text-center flex items-center justify-center cursor-pointer`}>
        B
      </button>
    </div>
  )
}

export default Topbar