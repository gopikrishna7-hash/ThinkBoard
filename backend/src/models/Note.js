import mongoose  from "mongoose";
const Schema=mongoose.Schema;
// 1: you need to create a Schema
// 2: need to create a model based off of that schema

const noteSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        content:{
            type:String,
            required:true
        }

    },
    {timestamps:true  }
);


const Note=mongoose.model("Note",noteSchema);

export default Note;