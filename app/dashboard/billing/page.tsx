"use client";
import React,{useState} from 'react'
import { Check, Loader2Icon } from 'lucide-react';
import axios from "axios";
const page = () => {
  return (
    <div className="px-4 py-6 flex flex-col justify-center items-center gap-5">
    <h1 className="font-bold text-lg">Upgrade with monthly plan</h1>
    <div className="flex flex-row gap-10">
        <div className="bg-white p-8 rounded-md border shadow-md flex flex-col justify-center items-center gap-2">
         <h2 className="font-bold text-md">Free</h2>
         <h3 className="text-sm"><span className="font-bold text-xl">0$</span> /month</h3>
         <p className="text-sm flex gap-1"> <Check className="font-medium text-gray-400"/> 10,000 /Month</p>
         <p className="text-sm flex gap-1"> <Check className="font-md text-gray-400" /> 50 + content Templates</p>
         <p className="text-sm flex gap-1"> <Check className="font-md text-gray-400" /> Unlimited Download & copy</p>
         <p className="text-sm flex gap-1"> <Check className="font-md text-gray-400" /> 1 month of history</p>
         <button className=" rounded-lg bg-slate-500 border shadow-md text-white p-2">Currently Active Plan</button>
        </div>

        <div className="bg-white p-8 rounded-md border shadow-md flex flex-col justify-center items-center gap-2">
        <h2 className="font-bold text-md">Monthly</h2>
         <h3 className="text-sm"><span className="font-bold text-xl">9.99$</span> /month</h3>
         <p className="text-sm flex gap-1"> <Check className="font-md text-gray-400"/> 10,00,000 /Month</p>
         <p className="text-sm flex gap-1"> <Check className="font-md text-gray-400" /> 50 + Templates Access</p>
         <p className="text-sm flex gap-1"> <Check className="font-md text-gray-400" /> Unlimited Download & copy</p>
         <p className="text-sm flex gap-1"> <Check className="font-md text-gray-400" /> 1 year of history</p>
         <button className="rounded-lg border shadow-md text-black p-2 flex flex-row gap-1">Get Started</button>
        </div>
    </div>
    </div>
  )
}

export default page
