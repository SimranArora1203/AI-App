import { UserProfile } from '@clerk/nextjs'
import React from 'react'

const page = () => {
    return (
        <div className="flex items-center justify-center  bg-slate-100 mt-5">

            <UserProfile />

        </div>
    )
}

export default page
