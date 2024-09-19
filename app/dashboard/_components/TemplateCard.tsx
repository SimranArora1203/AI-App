import React from 'react'
import Image from 'next/image'
import { TEMPLATE } from './TemplateList'
import Link from "next/link";
const TemplateCard = (item:TEMPLATE) => {
  return (
    <Link href={`/dashboard/content/${item?.slug}`}>
    <div className="flex flex-col gap-3 shadow-md rounded-md border bg-white p-5 cursor-pointer hover:scale-105 transition-all h-64">
      <Image src={item.icon}width={50}height={50} alt="no img"></Image>
            <h2 className="font-bold text-xl">{item.name}</h2>
            <p className="text-gray-500 line-clamp-3" >{item.desc}</p>
    </div></Link>
  )
}

export default TemplateCard
