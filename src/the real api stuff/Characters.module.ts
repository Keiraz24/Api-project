import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CharactersController } from "./Characters.controller";
import { CharactersService } from "./Characters.service";
import { CharactersSchema } from "./Characters.model";

@Module({
    imports: [MongooseModule.forFeature([{name:'Characters', schema: CharactersSchema}])],
    controllers: [CharactersController],
    providers: [CharactersService],
})

export class CharactersModule{}