import { Injectable } from '@nestjs/common';
import { CreateLawyerProfileDto } from './dto/create-lawyer-profile.dto';
import { UpdateLawyerProfileDto } from './dto/update-lawyer-profile.dto';

@Injectable()
export class LawyerProfileService {
  create(createLawyerProfileDto: CreateLawyerProfileDto) {
    return 'This action adds a new lawyerProfile';
  }

  findAll() {
    return `This action returns all lawyerProfile`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lawyerProfile`;
  }

  update(id: number, updateLawyerProfileDto: UpdateLawyerProfileDto) {
    return `This action updates a #${id} lawyerProfile`;
  }

  remove(id: number) {
    return `This action removes a #${id} lawyerProfile`;
  }
}
