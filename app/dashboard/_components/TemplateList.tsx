"use client";
import Templates from '@/app/(data)/Templates'
import { exportTraceState } from 'next/dist/trace'
import Image from "next/image";
import React from 'react'
import { useState,useEffect } from 'react';
import TemplateCard from './TemplateCard';
export interface TEMPLATE{
    name:string,
    desc:string,
    icon:string,
    category:string,
    slug:string,
    aiPrompt:string,
    form?:FORM[]
}
export interface FORM{
    label:string,
    field:string,
    name:string,
    required?:boolean
}
const TemplateList = ({userSearchInput}:any) => {
    const [templateList,setTemplateList]=useState(Templates);
useEffect(()=>{
  if(userSearchInput){
    const filterData=Templates.filter((item)=>
        item.name.toLowerCase().includes(userSearchInput.toLowerCase())
    )
    setTemplateList(filterData)
  }else{
    setTemplateList(Templates);
  }
  console.log(userSearchInput);
},[userSearchInput])
  return (
    <div className="p-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
       {
        templateList.map((item:TEMPLATE,index:number)=>(
         
           <TemplateCard key={index} {...item}/>
    
        ))
       }
    </div>
  )
}

export default TemplateList
