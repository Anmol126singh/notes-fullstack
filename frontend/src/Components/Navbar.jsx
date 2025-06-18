import React from 'react'
import {PlusIcon} from "lucide-react"
import { Link } from "react-router-dom"
function Navbar() {
  return (
    <header className='bg-base-300 border-b border-base-content/10 z-20 relative' >
        <div className='mx-auto max-w-full p-4 px-20'>
            <div className='flex justify-between  items-center'>
                <h1 className='text-3xl font-bold font-mono tracking-tight text-green-500 '>ThinkBoard</h1>
                <div className='flex items-center gap-4'>
                  <Link to={"/create"} className="btn btn-primary"><PlusIcon className='size-5' /> <span>New Note</span></Link>
            

                </div>
            </div>

        </div>

    </header>
  )
}

export default Navbar