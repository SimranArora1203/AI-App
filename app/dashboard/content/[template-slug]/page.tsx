"use client";
import React, { useContext } from 'react'
import { useEffect, useState } from 'react'
import FormSection from '../_components/FormSection';
import OutputSection from '../_components/OutputSection';
import { TEMPLATE } from '../../_components/TemplateList';
import Templates from '@/app/(data)/Templates';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { chatSession } from '@/utils/AiModal';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import moment from "moment";
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
// import { useRouter } from 'next/router';
export interface PROPS {
  params: {
    'template-slug': string
  }
}
export default function createNewContent(props: PROPS) {
  const selectedTemplate: TEMPLATE | undefined = Templates?.find((item) => item.slug == props.params['template-slug']);
  const [loading, setLoading] = useState<boolean>(false);
  const [aiOutput, setAiOutput] = useState<string>("");
  const {user}=useUser();
  const router=useRouter();
  const {totalUsage,setTotalUsage}=useContext(TotalUsageContext);
  const GenerateAIContent = async (formData: any) => {
    setLoading(true);
  if(totalUsage>=10000){
console.log("please Upgrade")
router.push("/dashboard/billing")
return;
  }
    const selectedPrompt = selectedTemplate?.aiPrompt;
    const finalAIPrompt = JSON.stringify(formData) + "," + selectedPrompt;
    const result = await chatSession.sendMessage(finalAIPrompt);
    // console.log("GenerateAIContent",result.response.text());
    setAiOutput(result?.response.text());
     await saveInDb(JSON.stringify(formData),selectedTemplate?.slug,result?.response.text())
    setLoading(false);
  }

  const saveInDb=async(formData:any,slug:any,aiRes:string)=>{
const result=await db.insert(AIOutput).values(
  {
    formData:formData,
    templateSlug:slug,
    aiResponse:aiRes,
    createdBy:user?.primaryEmailAddress?.emailAddress||"",
    createdAt:moment().format('DD/MM/YYYY')
  }
)
console.log("result is",result);
  }

  return (
    <div className="p-3 bg-slate-100">
      <Link href="/dashboard">
        <button className="bg-primary text-white font-bold rounded-sm border flex gap-1 p-1"><ArrowLeft />Back</button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 p-1 ">
        <FormSection selectedTemplate={selectedTemplate} userFormInput={(v: any) => GenerateAIContent(v)} loading={loading} />
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>

      </div>
    </div>
  )
}