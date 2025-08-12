"use client"
import React from 'react'
import { Bell, Menu, Settings } from 'lucide-react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center w-full mb-7'>
        <div className='flex justify-between items-center gap-5'>
            <button className='px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-400 ' onClick={() => {}}>
                <Menu className='w-6 h-6 text-gray-900 hover:text-white' />
            </button>
        
            <div className='relative'>
                <input type="search" placeholder='Start type to search ' className='pl-10 pr-4 py-2 w-50 md:w-80 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500' />

                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <Bell className=' text-gray-500' size={20} />
                </div>
            </div>
        </div>

        {/* kanan navbar */}
        <div className='flex justify-between items-center gap-5'>
            <div className='hidden md:flex justify-between items-center gap-5'>
                <div className='relative'>
                    <Bell className='cursor-pointer text-gray-500' size={25} />
                    <span className='absolute -top-2 -right-1 bg-red-500 text-white text-xs font-semibold rounded-full px-1'>3</span>
                </div>
                <hr className='h-6 border-l border-solid border-gray-400 mx-3' />
                <div className='flex items-center gap-3 cursor-pointer'>
                    <div className='w-9 h-9'>
                        Image
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-gray-900 font-semibold'>John Doe</span>
                        <span className='text-gray-600 text-sm'>Admin</span>
                    </div>
                </div>
                <Link href='/settings' className='text-blue-500 hover:text-blue-700 font-semibold'>
                    <Settings className='w-6 h-6 text-gray-900 hover:text-blue-500' />   
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar