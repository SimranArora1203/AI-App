"use client";
import React from 'react'
import Image from 'next/image'
import { useEffect } from 'react';
import { FileClock, Home, Settings, WalletCards } from 'lucide-react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import UsageTrack from './UsageTrack';
const SideNav = () => {
     const MenuList=[
        {
            name:'Home',
            icon:Home,
            path:'/dashboard'
        },
        {
            name:'History',
            icon:FileClock,
            path:'/dashboard/history'
        },
        {
            name:'Billing',
            icon:WalletCards,
            path:'/dashboard/billing'
        },
        {
            name:'Setting',
            icon:Settings,
            path:'/dashboard/setting'
        }
     ]
     const path=usePathname();
       console.log(path);
       useEffect(()=>{
        console.log(path)
       })
  return (
    <div className="h-screen border shadow-md p-4 bg-white relative">
      <div className="flex justify-center">
        <Image
        src="/logo.svg"width={120}height={100}alt="no img"/>
      </div>
       <hr className="mt-6 border-2"/>
      <div className="p-3 pt-12">
        {
            MenuList.map((menu,index)=>(  
              <Link href={`${menu.path}`} key={index}>
            <div key={index} className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white hover:rounded-lg cursor-pointer ${path===menu.path && 'bg-primary border-full rounded-xl text-white'}` }>
             <menu.icon className="h-6 w-6"/>
             <h2>{menu.name}</h2>
            </div></Link>
            ))
        }
      </div>
      <div className="absolute bottom-1 left-0 w-full p-3 pt-12">
      <UsageTrack/>
      </div>
    </div>
  )
}

export default SideNav
