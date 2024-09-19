import React, { useContext, useEffect,useState } from 'react'
import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/nextjs'
import { OutputItem } from '../history/page';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
const UsageTrack = () => {
   const {user}=useUser();
  //  const [totalUsage,setTotalUsage]=useState(0);
   const {totalUsage,setTotalUsage}=useContext(TotalUsageContext);
   useEffect(()=>{
    console.log("user is",user)
    user && getData();
   },[user]);
   const getData=async()=>{
    let result:OutputItem[];
    result=await db.select().from(AIOutput).where(eq(AIOutput.createdBy,user?.primaryEmailAddress?.emailAddress));
    getTotalUsage(result);
   }
   const getTotalUsage=(result:OutputItem[])=>{
    let total:number=0;
    result.forEach((element)=>{
        total=total+Number(element.aiResponse?.length);
    })
    setTotalUsage(total);
    console.log(result)
   }
  return (
    <div className="m-5">
        <div className="bg-primary text-white rounded-lg p-3">
      <h2 className="font-bold">Credits</h2>
      <div className="h-2 bg-[#9981f9] mt-2 rounded-full w-full">
         <div className='h-2 bg-white rounded-full'style={{ width: `min(${(totalUsage / 10000) * 100}%, 100%)` }}></div>
      </div>
   <h2 className="text-sm my-2">{totalUsage} Credits Used</h2>
        </div>
    <Button variant={'secondary'}className="my-2 w-full text-primary">Upgrade</Button>
    </div>
  )
}

export default UsageTrack;
