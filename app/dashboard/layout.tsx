"use client";
import { TotalUsageContext } from "../(context)/TotalUsageContext";
import Header from "./_components/Header";
import SideNav from "./_components/SideNav";
import { useState } from "react";
export default function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    const [totalUsage,setTotalUsage]=useState<Number>(0);
return(
  <TotalUsageContext.Provider value={{totalUsage,setTotalUsage}}>
    <div className="flex bg-slate-100 h-full">
        <div className="w-64 hidden md:block fixed">
            <SideNav/>
        </div>
        <div className="md:ml-64 flex-1">
            <Header/> 
           {children}  
        </div>
       
    </div></TotalUsageContext.Provider>
)
}