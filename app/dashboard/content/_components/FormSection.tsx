"use client"
import React from 'react'
import { FORM, TEMPLATE } from '../../_components/TemplateList'
import Image from 'next/image';
import { useState } from 'react';
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Loader2Icon } from 'lucide-react';

interface PROPS{
    selectedTemplate?:TEMPLATE;
    userFormInput?:any,
    loading:boolean
}
const FormSection = ({selectedTemplate,userFormInput,loading}:PROPS) => {
    const [formData,setFormData]=useState({});
const onSubmit=(e:any)=>{
  e.preventDefault();
  // console.log(formData)
  userFormInput(formData);
  
}
const handleInputChange=(event:any)=>{
   const {name,value}=event.target;
   setFormData({...formData,[name]:value});
}
  return (
    <div className="p-6 rounded-lg border shadow-md bg-white flex flex-col gap-2 h-auto">
        <Image src={`${selectedTemplate?.icon}`}alt="no-img"width={70}height={70}></Image>
       <h2 className="font-bold text-primary">{selectedTemplate?.name}</h2>
       <p className="text-xs">{selectedTemplate?.desc}</p>
       <form onSubmit={onSubmit} className="flex flex-col gap-4">
       {
        selectedTemplate?.form?.map((item:FORM,index:number)=>(
            <div key={index} className="flex flex-col gap-2">
             <label className="font-bold">{item.label}</label>
            {
             item?.field=="input"?<Input name={item.name} required={item?.required} onChange={handleInputChange}/>:item.field=="textarea"?<Textarea name={item.name} required={item?.required}onChange={handleInputChange}/>:null
            }
            </div>
        ))
       }
       <button type="submit" className="bg-primary text-white w-full rounded-md p-1 flex gap-1 items-center justify-center"disabled={loading}>
        {
          loading && <Loader2Icon className='animate-spin text-center'/>
        }
        Generate Content</button>
       </form>
    </div>
  )
}

export default FormSection
