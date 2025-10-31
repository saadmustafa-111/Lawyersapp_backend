import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private usermodel:Model<User>) {}
async create(createUserDto: CreateUserDto): Promise<User> {
  const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
  const user = new this.usermodel({ ...createUserDto, password: hashedPassword });
  return user.save();
}

 async findAll():Promise<User[]> {
  return this.usermodel.find().exec();
  }
  async findOne(id: string): Promise<User | null> {
    return this.usermodel.findById(id).exec();
  }
 async findByEmail(email: string): Promise<User | null> {
    return this.usermodel.findOne({ email }).exec();
  }
 async update(id: string, updateUserDto: UpdateUserDto): Promise<User | null> {
  return this.usermodel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
}

async remove(id: string): Promise<string> {
  await this.usermodel.findByIdAndDelete(id);
  return `User with id ${id} has been deleted`;
}
}
