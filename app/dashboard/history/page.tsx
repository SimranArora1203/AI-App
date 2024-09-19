"use client";
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import React from 'react'
import { useState,useEffect } from 'react'
export interface OutputItem{
    id:number,
    formData:string,
    createdBy:string,
    aiResponse:string|null,
    templateSlug:string,
    createdAt:string | null,

}
const page = () => {
    const getData=async()=>{
        const result=await db.select().from(AIOutput);
        return result;
    }
const [output,setOutput]=useState<OutputItem[]>([]);
useEffect(()=>{
const fetchData=async()=>{
    const data=await getData();
    console.log(data)
    setOutput(data);
}
fetchData();
},[]);
  return (
    <div className="p-5 flex flex-col gap-5 bg-slate-100">
      <h1 className="font-bold">History</h1>
      <p>Search your previously generate AI content</p>
      <table className="w-full h-64 ">
        <thead className="">
            <tr className="bg-yellow-50 border-b">
            <th className="w-1/4 text-center">Template
            </th>
            <th className="w-3/4 text-center px-4 py-2">AI Resp</th>
            <th className="w-1/4 text-center">Date</th>
            <th className="w-1/4 text-center">Words</th>
            <th className="w-1/4 text-center">Copy</th>
        </tr>
        </thead>
        <tbody>
        {
            output.map((item,index)=>(
            
                <tr key={index} className="border-b">
                    <td className="w-1/4 text-center">{item.templateSlug}</td>
                    <td className="w-3/4 px-4 py-4">
        <div className="line-clamp-2 text-center max-h-24 overflow-hidden">
          {item.aiResponse}
        </div>
      </td>
                    <td className="w-2/3 text-center">
                        {item.createdAt}
                    </td>
                    <td className="w-1/4 text-center">
                        {item.aiResponse?.length || 0}
                    </td>
                   <td>
                    <button className="text-blue-800"onClick={()=>navigator.clipboard.writeText(item.aiResponse || "")}>Copy</button>
                   </td>
                </tr>
                
            ))
        }
        </tbody>
      </table>
    </div>
  )
}

export default page

