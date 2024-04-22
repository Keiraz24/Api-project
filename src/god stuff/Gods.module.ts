import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { GodsController } from "./Gods.controller";
import { GodsService } from "./Gods.service";
import { GodsSchema } from "./Gods.model";

@Module({
    imports: [MongooseModule.forFeature([{name:'Gods', schema: GodsSchema}])],
    controllers: [GodsController],
    providers: [GodsService],
})

export class GodsModule{}