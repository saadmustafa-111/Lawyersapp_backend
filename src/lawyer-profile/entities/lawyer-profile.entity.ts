import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { User } from "src/users/entities/user.entity";

@Schema({ timestamps: true })
export class LawyerProfile extends Document {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  user: User;

  @Prop()
  profileImage: string;

  @Prop({ required: true })
  contactNumber: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  cnic: string;

  @Prop({ required: true, enum: ['male', 'female', 'other'] })
  gender: string;

  @Prop({ required: true })
  dateOfBirth: Date;

  @Prop({ required: true })
  barCouncilName: string;

  @Prop({ required: true })
  yearsOfExperience: number;

  @Prop({ type: [String], required: true })
  expertise: string[];

  @Prop({ required: true })
  qualification: string;

  @Prop()
  bio: string;
}

export const LawyerProfileSchema = SchemaFactory.createForClass(LawyerProfile);
