import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import RateLimitedUI from '../Components/RateLimitedUI'

import toast from "react-hot-toast"
import { Diameter } from 'lucide-react'
import NoteCard from '../Components/NoteCard'
import api from '../lib/axios'
import NotesNotFound from '../Components/NotesNotFound'
function HomePage() {
  const [isRateLimited,setisRateLimited]=useState(false);
  const[notes,setnotes]=useState([]);
  const[loadingstate,setloadingstate]=useState(true);
  useEffect(()=>{
    
      const fetchNotes = async ()=>{
        try{
        const res = await api.get("/notes")
        setnotes(()=>res.data);
        setisRateLimited(false);
        }
        catch(err){
          if(err.response.status === 429){
            setisRateLimited(true);
          }
          else{
            toast.error("failed to load notes")
          }
        }
        finally{
          setloadingstate(false);
        }
        
      }
      fetchNotes();
    },
  [])
  return (

    <div className='min-h-screen bg-transparent'>
  <Navbar />
  {isRateLimited && <RateLimitedUI /> }
  {notes.length===0 && !isRateLimited && <NotesNotFound />}
  <div className='max-w-7xl mx-auto p-4 mt-6'>
    {loadingstate && <div className='text-primary text-center py-10 '>Loading notes..... </div>}
    {notes.length!=0 && !isRateLimited &&(<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
      {notes.map((note)=><NoteCard key={note._id} note={note} setnotes={setnotes} />)}
    </div>)}
  </div>
    </div>
  
    
  )
}

export default HomePage