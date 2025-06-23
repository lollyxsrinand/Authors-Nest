'use client'
import React from 'react'
import Icon from '../components/Icon'
import Topbar from './Topbar'

const Write = () => {
  const [isBold, setIsBold] = React.useState(false)
  const editorRef = React.useRef<HTMLDivElement>(null)
  return (
    <div className="w-full h-screen bg-black text-white flex flex-col items-center justify-center">

      <Topbar isBold={isBold} setIsBold={setIsBold} />

      <div className='h-full w-full p-2.5 flex flex-col gap-2.5'>
        <div ref={editorRef}
          contentEditable={true}
          className={`h-full w-full p-2.5 bg-neutral-900 resize-none rounded-2xl focus:outline-none`}
        >
        </div>
      </div>

      {/* <div className='h-full w-full p-2.5 '>
        <textarea className={`${isBold ? 'font-bold':''} h-full w-full p-2.5 bg-neutral-900 resize-none rounded-2xl focus:outline-none`} />
      </div> */}

    </div>
  )
}

export default Write 