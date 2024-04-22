import * as mongoose from 'mongoose'
export const GodsSchema = new mongoose.Schema({
    name: {type: String, required: true},
    type:{type: String, required:true},
    description: {type: String, required: true},
    game:  {type: String, required: true},
    active:{type: Boolean, required: true}
});

export interface Gods extends mongoose.Document{


  id: string;
  name:string;
  title: string;
  desc: string; 
  game: string;
  active: Boolean;
}