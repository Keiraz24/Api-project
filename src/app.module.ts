import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharactersModule } from './the real api stuff/Characters.module';
import{MongooseModule} from '@nestjs/mongoose';
import{GodsModule} from './god stuff/Gods.module';

@Module({
  imports: [CharactersModule, GodsModule, MongooseModule.forRoot('mongodb+srv://keirazhuo24:keirazhuo24@cluster0.gbqbnl9.mongodb.net/test')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
