"use client"
import { Menu } from 'lucide-react'
import React from 'react'

const Sidebar = () => {
  return (
    <div>
        {/* top logo */}
        <div className='flex gap-3 justify-between md:justify-normal items-center pt-8'>
            <div>logo</div>
            <h1 className='font-extrabold text-2xl'>Labomen</h1>
            <button className='hidden p-3 py-3 bg-gray-100 rounded-full hover:bg-blue-400' onClick={()=>{}}>
                <Menu className='w-4 h-4' />
            </button>
        </div>
        {/* links */}
        <div className='flex-grow mt-8'>
        {/* link taruh sini */}
        </div>

        {/* footer */}
        <div>
            <p className='text-center text-xs text-gray-500'>&copy; 2025 Labomen </p>
        </div>
    </div>
  )
}

export default Sidebar