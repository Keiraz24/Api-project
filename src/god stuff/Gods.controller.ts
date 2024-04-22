import { Controller, Post, Body, Get, Param, Patch, Delete} from '@nestjs/common';
import { GodsService } from './Gods.service';

@Controller('Gods')
export class GodsController{
    constructor( private readonly godsService: GodsService){}
    // @Post()
    // async addGod(
    //     @Body('title')godTitle: string, 
    //     @Body('description')godDesc: string,
    //     @Body('name')godName: string,
    //     @Body('game')godGame: string,
    //     @Body('active')godActive: boolean
    //     ) {
    //     const generatedID= await this.godsService.insertGod(
    //         godTitle, 
    //         godDesc,
    //         godName,
    //         godGame,
    //         godActive);
    //     return{id:generatedID};
    // }

    @Post()
    async addCharacter(
        @Body('title')charTitle: string, 
        @Body('description')charDesc: string,
        @Body('name')charName: string,
        @Body('game')charGame: string, 
        @Body('active')charActive: boolean, ) {
        const generatedID= await this.godsService.insertGod(
            charTitle, 
            charDesc,
            charName,
            charGame, 
            charActive);
        return{id:generatedID};
    }
    @Get()
    async getAllGods(){
        const gods= await this.godsService.getGods();
        return gods;
    }
    @Get(':id')
    getGod(@Param('id') godId: string,){
        return this.godsService.getSingleGod(godId);
    }
    @Patch(':id')
   async updateGod(@Param('id') godId: string,@Body('title')godTitle: string,@Body('description')godDesc: string,@Body('name')godName: string, @Body('game')godGame: string, @Body('active')godActive: boolean ){
       await this.godsService.updateGod(godId, godTitle, godDesc, godName, godGame, godActive);
        return null;
    }

    @Delete(':id')
  async removeGod(@Param('id') godId: string) {
     await this.godsService.deleteGod(godId);
      return null;
  }
}
