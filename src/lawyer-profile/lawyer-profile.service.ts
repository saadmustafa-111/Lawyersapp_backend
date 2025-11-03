import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLawyerProfileDto } from './dto/create-lawyer-profile.dto';
import { UpdateLawyerProfileDto } from './dto/update-lawyer-profile.dto';
import { LawyerProfile } from './entities/lawyer-profile.entity';

@Injectable()
export class LawyerProfileService {
  constructor(@InjectModel(LawyerProfile.name) private readonly lawyerProfileModel: Model<LawyerProfile>) {}
 async create(createLawyerProfileDto: CreateLawyerProfileDto &{user:string}) {
const lawyerProfile = new this.lawyerProfileModel(createLawyerProfileDto);
return lawyerProfile.save();
  }

  async findAll() {
    return await this.lawyerProfileModel.find().populate('user').exec();
  }
 async findOne(id: number) {
    return  await this.lawyerProfileModel.findById(id).populate('user').exec();
  }

  update(id: number, updateLawyerProfileDto: UpdateLawyerProfileDto) {
    return `This action updates a #${id} lawyerProfile`;
  }

  remove(id: number) {
    return `This action removes a #${id} lawyerProfile`;
  }
}
