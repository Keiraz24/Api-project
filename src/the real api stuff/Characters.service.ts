import { Injectable, NotFoundException } from "@nestjs/common";
import {InjectModel} from '@nestjs/mongoose'
import { Characters } from "./Characters.model"
import { Model } from "mongoose";
@Injectable()