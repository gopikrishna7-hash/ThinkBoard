import Note from "../models/Note.js";
export async function getAllNotes(req,res){
    try{
        const notes = await Note.find().sort({createAt:-1});// newest first  
        res.status(200).json(notes);
        
    }catch(error){
        console.error("Error in getAllNotes controller",error);
        res.status(500).json({message:"Internal Server Error"})
    };
};

export async function getNoteById(req, res) {
  try {
    console.log("Requested ID:", req.params.id);

    const note = await Note.findById(req.params.id);

    console.log("Found note:", note);

    if (!note) {
      return res.status(404).json({
        message: "Note not found!"
      });
    }

    return res.status(200).json(note);

  } catch (error) {
    console.error("Error in getById controller", error);

    return res.status(500).json({
      message: "Internal Server Error"
    });
  }
}

export async function createNotes(req,res){
    try{
        console.log(req.body);
        const {title,content}=req.body
        const newNote=new Note({title,content})
        console.log("Note Created ")
        await newNote.save()
        res.status(201).json({message:"Note created succesfully"});
    }
    catch(error){
        console.error("Error in createNotes controller",error);
        res.status(500).json({message:"Internal Server Error"})
    }
};
export async function UpdatedNotes(req,res){
    try{
        const {title,content}=req.body
        const updatedNote=await Note.findByIdAndUpdate(req.params.id,{title,content},
        {
            new:true
        });
        
        // is wrgn id_num
        if(!updatedNote) return res.status(404).json({message:"Note not found"});

        res.status(200).json(updatedNote)

    }
    catch(error){
        console.error("Error in UpdateNotes controller",error);
        res.status(500).json({message:"Internal Server Error"})
    }
};
export async function deleteNotes(req,res){
    try{
        const deletedNotes=await Note.findByIdAndDelete(req.params.id)
        if(!deletedNotes){
            res.status(404).json({message:"Note not found"})
        }
        res.status(200).json({message:"Note Deleted Successfully "})
    }catch(error){
        console.log("Error in deletedNotes at controller")
        res.status(500).json({message:"Internal Server Error",error})
    }
    
}