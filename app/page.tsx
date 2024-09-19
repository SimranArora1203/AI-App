import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { UserPen } from 'lucide-react';
import Footer from "./dashboard/content/_components/Footer";
export default function Home() {
  return (
  
      
      <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="p-5 flex justify-between">
          <Image src="/logo.svg" width={120} height={100} alt="no img" />
          <Link href="/dashboard" className="flex justify-between gap-1">
            <UserPen /> Get Started
          </Link>
        </div>
        <hr />
        <div className="flex items-center justify-center gap-8 flex-col mt-10 p-3">
          <h1 className="font-bold text-4xl">
            AI Content <span className="text-blue-800">Generator</span>
          </h1>
          <p>
            Revolutionize your content creation with our AI powered App,
            delivering engaging and high quality text in seconds
          </p>
          <Link href="/dashboard">
            <Button className="font-bold p-5">Get Started</Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
        );
}
