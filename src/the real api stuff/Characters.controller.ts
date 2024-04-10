import { Controller, Post, Body, Get, Param, Patch, Delete} from '@nestjs/common';
import { CharactersService } from './Characters.service';

@Controller('characters')
export class CharactersController{
    constructor( private readonly charactersService: CharactersService){}
    @Post()
    async addCharacter(
        @Body('title')charTitle: string, 
        @Body('description')charDesc: string,
        @Body('name')charName: string,
        @Body('game')charGame: string) {
        const generatedID= await this.charactersService.insertCharacter(
            charTitle, 
            charDesc,
            charName,
            charGame);
        return{id:generatedID};
    }
    @Get()
    async getAllCharacters(){
        const characters= await this.charactersService.getCharacters();
        return characters;
    }
    @Get(':id')
    getCharacter(@Param('id') charId: string,){
        return this.charactersService.getSingleCharacter(charId);
    }
    @Patch(':id')
   async updateCharacter(@Param('id') charId: string,@Body('title')charTitle: string,@Body('description')charDesc: string,@Body('name')charName: string, @Body('game')charGame: string ){
       await this.charactersService.updateCharacter(charId, charTitle, charDesc, charName, charGame);
        return null;
    }

    @Delete(':id')
  async removeCharacter(@Param('id') prodId: string) {
     await this.charactersService.deleteCharacter(prodId);
      return null;
  }
}
