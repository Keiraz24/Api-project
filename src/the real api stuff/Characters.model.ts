import * as mongoose from 'mongoose'
export const CharactersSchema = new mongoose.Schema({
    name: {type: String, required: true},
    title:{type: String, required:true},
    description: {type: String, required: true},
    game:  {type: String, required: true},
    
});

export interface Characters extends mongoose.Document{


  id: string;
  name:string;
  title: string;
  description: string; 
  game: string;
}