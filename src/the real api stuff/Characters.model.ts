import * as mongoose from 'mongoose'
export const CharactersSchema = new mongoose.Schema({
    name: {type: String, required: true},
    title:{type: String, required:true},
    description: {type: String, required: true},
    game:  {type: Number, required: true},
    
});

export interface Product extends mongoose.Document{


  id: string;
  name:string;
  title: string;
  desc: string; 
  game: number;
}