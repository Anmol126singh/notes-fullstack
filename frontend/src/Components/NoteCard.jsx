import { PenSquareIcon, TrashIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'
import { formatDate } from '../lib/util'
import api from '../lib/axios'
import toast from 'react-hot-toast'

function NoteCard({note,setnotes}) {
        const handleClick= async(e,id)=>{
            e.preventDefault();
            if(!window.confirm("are you sure you want to delete this note ")) return;
            try{
                await api.delete(`/notes/${id}`);
                toast.success("note delted successfully");
                setnotes((prev)=>prev.filter(note=> note._id !== id))
            }
            catch(err){
                toast.err("deletion failed");
                console.log(err);
            }

        }
  return (

   <Link to={`/note/${note._id}/`} className='card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-green-400 ' >
    <div className="card-body">
        <h3 className='card-title text-base-content'>{note.title}</h3>
        <p className='text-base-content/70 line-clamp-3'>{note.content}</p>
        <div className="card-actions justify-between items-center mt-4">
            {formatDate(new Date(note.createdAt))}
               <div className='flex items-center gap-1'>
            <PenSquareIcon className='size-4' />
             <button className='btn btn-ghost btn-xs text-erro' onClick={(e)=>handleClick(e,note._id)}>
            <TrashIcon className='size-4' />
        </button>
        </div>
       
        </div>
     
    </div>
   </Link>
  )
}

export default NoteCard