import { Injectable, NotFoundException } from "@nestjs/common";
import {InjectModel} from '@nestjs/mongoose'
import { Characters } from "./Characters.model"
import { Model } from "mongoose";
@Injectable()
export class CharactersService {
   
    constructor(@InjectModel('Characters') private readonly characterModel: Model<Characters>){}
 
     async insertCharacter(title: string, desc: string, name: string, game: string){
         const newCharacter= new this.characterModel({
           title: title, 
           description:desc, 
           name: name,
           game:game  });
         const result= await newCharacter.save();
         return result.id as string;
     }
 
     async getCharacters(){
       const characters= await this.characterModel.find().exec();
         return characters.map(char=>({
           id:char.id, 
           title: char.title, 
           description: char.desc, 
           name: char.name,
           game: char.game }));
     }
     async getSingleCharacter(characterId: string){
         const character = await this.findCharacter(characterId);
         return {id: character.id,
           title: character.title,
           description: character.desc,
           name: character.name,
           game: character.game,
         
         };//blah blah
     }
 
     async updateCharacter(characterId:string, title: string, desc: string, name: string, game: string){
         const updatedCharacter = await this.findCharacter(characterId);
     if (title) {
       updatedCharacter.title = title;
     }
     if(desc){
         updatedCharacter.desc= desc;
     }
     if(name){
       updatedCharacter.name= name;
     }
     if(game){
      updatedCharacter.game =game;
     }
 
     updatedCharacter.save();
   }
 
   async deleteCharacter(charId: string) {
     const result = await this.characterModel.deleteOne({_id:charId}).exec();
     if (result.deletedCount === 0) {
       throw new NotFoundException('Could not find Character.');}
    
     }
 
 
     private async findCharacter(id: string): Promise<Characters> {
       let character;
       try{
          character= await this.characterModel.findById(id);
 
       }catch(error){
         throw new NotFoundException('Could Not Find');
       }
       if (!character) {
           throw new NotFoundException('Could not find character.');
       }
         return character;
         };
       } 
 
 