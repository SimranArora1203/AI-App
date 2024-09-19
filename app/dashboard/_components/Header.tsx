import React from 'react'
import { Search } from 'lucide-react';
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';
const Header = () => {
  return (
    <div className='p-5 flex justify-between items-center shadow-lg border-b-2 bg-white'>

      <div className='flex gap-2 items-center border p-2 rounded-md max-w-lg'>
        <Search/>
       <input type="text"placeholder="Search..."className="outline-none"/>
      </div>
      <div className="flex flex-row gap-2">
        <div className='bg-primary rounded-full p-1 text-xs text-white'>
       <h2>🔥Join Membership just for $9.99/month </h2>
      </div>
      <UserButton/> 
      </div>
     
    </div>
  )
}

export default Header
