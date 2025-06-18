import Note from "../model/notesModel.js";

export const getnotes = async(req,res)=>{
    try{
    const allnotes = await Note.find().sort({createdAt:-1});
    res.status(200).json(allnotes)

    }
    catch(err){
        console.log(err);
    }
}
export const getnotebyid = async(req,res)=>{
    try{
    const allnotes = await Note.findById(req.params.id);
    if(!allnotes) res.status(404).json("couldn't found")
    res.status(200).json(allnotes)


    }
    catch(err){
        console.log(err);
    }
}
export const postnotes = async(req,res)=>{
const newnote = new Note({
    title:req.body.title,
    content:req.body.content,
})
try{
   const creatednote= await newnote.save()
    res.status(200).json({message:"note created"})
}
catch(err){
    res.status(500).json({message:err.message})
}

}
export const updatenotes = async (req,res)=>{
    try{
    const updatednotes= await Note.findByIdAndUpdate(req.params.id,{
         title:req.body.title,
    content:req.body.content,
    },{
        new:true
    });
 if(!updatednotes) res.status(404).json("couldn't found the note to update")
 res.status(200).json({message:"note updated successfully"})
    }
    catch(err){
            res.status(500).json({message:err.message})

    }
   
}
export const deletenotes = async (req,res)=>{


    try{
     await Note.findByIdAndDelete(req.params.id);

 res.status(200).json({message:"note deleted successfully"})
    }
    catch(err){
            res.status(500).json({message:err.message})

    }
}
