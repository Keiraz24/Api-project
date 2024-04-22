import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Gods } from './Gods.model';
import { Model } from 'mongoose';
@Injectable()
export class GodsService {
  constructor(@InjectModel('Gods') private readonly godModel: Model<Gods>) {}

  async insertGod(
    title: string,
    desc: string,
    name: string,
    game: string,
    active: boolean,
  ) {
    const newGod = new this.godModel({
      // title: title,
      title,

      // description: desc,
      desc,

      // name: name,
       name,

      // game: game,
      game,

      // active: active,
      active,

    });

    console.log(newGod);
    const result = await newGod.save();
    console.log('save');
    return result.id as string;
  }

  async getGods() {
    const gods = await this.godModel.find().exec();
    return gods.map((god) => ({
      id: god.id,
      title: god.title,
      description: god.desc,
      name: god.name,
      game: god.game,
      active: god.active,
    }));
  }
  async getSingleGod(godId: string) {
    const god = await this.findGod(godId);
    return {
      id: god.id,
      title: god.title,
      description: god.desc,
      name: god.name,
      game: god.game,
      active: god.active,
    }; //blah blah
  }

  async updateGod(
    godId: string,
    title: string,
    desc: string,
    name: string,
    game: string,
    active: boolean,
  ) {
    const updatedGod = await this.findGod(godId);
    if (title) {
      updatedGod.title = title;
    }
    if (desc) {
      updatedGod.desc = desc;
    }
    if (name) {
      updatedGod.name = name;
    }
    if (game) {
      updatedGod.game = game;
    }
    if (active) {
      updatedGod.active = active;
    }

    updatedGod.save();
  }

  async deleteGod(godId: string) {
    const result = await this.godModel.deleteOne({ _id: godId }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('Could not find this god.');
    }
  }

  private async findGod(id: string): Promise<Gods> {
    let god;
    try {
      god = await this.godModel.findById(id);
    } catch (error) {
      throw new NotFoundException('Could Not Find');
    }
    if (!god) {
      throw new NotFoundException('Could not find this god.');
    }
    return god;
  }
}
