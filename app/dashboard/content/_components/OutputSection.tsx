"use client";
import React, { useRef ,useEffect,useState} from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Copy, Terminal } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface props{
  aiOutput:string;
}
const OutputSection = (aiOutput:props) => {
  const editorRef:any=useRef();
  const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {
    if (editorRef.current) {
      const editorInstance = editorRef.current.getInstance();
      console.log("inside editor");
      editorInstance.setMarkdown(aiOutput.aiOutput);
    }
  }, [aiOutput]);
  const handleCopy=()=>{
    navigator.clipboard.writeText(aiOutput.aiOutput);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 1000);
  }
  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="flex justify-between p-3 items-center">
        <h2 className="text-md font-bold">Your Result
        </h2>
        {showAlert && (
        <Alert>
          <Terminal className="h-4 w-4" />
          {/* <AlertTitle>Copied!</AlertTitle> */}
          <AlertDescription>The result has been copied to your clipboard.</AlertDescription>
        </Alert>
      )}
        <button className="flex gap-2 bg-primary text-white p-1 rounded-md border shadow-md text-sm items-center" onClick={handleCopy}><Copy />Copy
        </button>
      </div>
      
      <Editor ref={editorRef}
    initialValue="Your result will appear here"
    height="400px"
    initialEditType="wysiwyg"
    useCommandShortcut={true} 
    onChange={()=>console.log(editorRef.current.getInstance().getMarkdown())}
  />
    </div>
  )
}

export default OutputSection
