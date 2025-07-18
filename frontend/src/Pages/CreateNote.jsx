import axios from 'axios';
import { ArrowLeftIcon } from 'lucide-react';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import api from '../lib/axios';

function CreateNote() {

  const[title,settitle]=useState("");
  const[content,setcontent]=useState("");
  const[loading,setloading]=useState(false);
  const Navigate = useNavigate();
  const handlesubmit = async(e)=>{
    e.preventDefault();
    if(!title.trim()|| !content.trim() ){
      toast.error("all fields are required")
      return;

    }
    setloading(true)
    try{
      await api.post("/notes",{
        title,content
      })
      toast.success("note created successfully");
      Navigate("/")
    }
   catch (error) {
      console.log("Error creating note", error);
      if (error.response.status === 429) {
        toast.error("Slow down! You're creating notes too fast", {
          duration: 4000,
          icon: "💀",
        });
      } else {
        toast.error("Failed to create note");
      }
    } 
    finally{
      setloading(false)
    }
  }
  return (
    <div className='relative min-h-screen bg-base-200'>
      <div className='container mx-auto px-4 py-8'>
        <div className='max-w-2xl mx-auto'>
          <Link to={"/"} className=' btn btn-ghost mb-6 '> 
          <ArrowLeftIcon className='size-5' />
          Back to Notes</Link>
          <div className='relative card bg-base-100'>
            <div className='card-body'>
              <h2 className='card-title text-2xl mb-4'>Create New Note</h2>
              <form onSubmit={handlesubmit}>
                <div className="form-control mb-4 flex h-full w-full items-start justify-around flex-col  gap-6">

                <div className="title w-full flex flex-col gap-3"> <label className='label'>
                  <span className='label-text'>Title</span>
                </label>
                <input type='text' placeholder='Note Title' className='input input-bordered w-xl relative' value={title} onChange={(e)=>settitle(e.target.value)} />
                </div>
               
                
                
                <div className="content  w-full flex flex-col gap-3  ">
                    <label className='label'>
                  <span className='label-text'>Content</span>
                </label>
                <textarea type='text' placeholder='Note Content' className='textarea textarea-bordered w-xl' value={content} onChange={(e)=>setcontent(e.target.value)} />
              
                </div>
                </div>
                <div className='card-actions justify-end'>
                  <button type='submit' className='btn btn-primary' disabled={loading}>{loading?"Creating...":"CreateNote"}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CreateNote