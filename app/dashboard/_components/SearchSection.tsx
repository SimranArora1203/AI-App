import React from 'react'
import { Search } from 'lucide-react';
const SearchSection = ({onSearchInput}:any) => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center p-4 bg-gradient-to-br from-purple-500 via-purple-600 to-blue-600 text-white ">
      <h2 className="text-2xl font-bold">Browse All Templates</h2>
      <p>What would you like to create today?</p>
      <div className="w-full flex items-center justify-center">
          <div className="flex  items-center border gap-2 p-2 w-[40%] rounded bg-white text-black">
      <Search className="text-primary"/>
      <input type="text"placeholder="Search..."className="bg-transparent outline-none"onChange={(event)=>onSearchInput(event.target.value)}/>
      </div>
      </div>
    </div>
  )
}

export default SearchSection
