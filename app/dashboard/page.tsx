"use client";
import React, { useEffect } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateList from './_components/TemplateList'
import { useState } from 'react'
const page = () => {
  const [userSearchInput,setUserSearchInput]=useState<string>();
  useEffect(()=>{
    console.log(userSearchInput)
  })
  return (
    <div className="bg-slate-100">
      <SearchSection onSearchInput={(value:string)=>setUserSearchInput(value)} />
      <TemplateList userSearchInput={userSearchInput}/>
    </div>
  )
}

export default page
