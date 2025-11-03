import { ApiProperty } from '@nestjs/swagger';

export class CreateLawyerProfileDto {
 
  @ApiProperty()
  profileImage: string;

  @ApiProperty()
  contactNumber: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  cnic: string;

  @ApiProperty()
  gender: 'male' | 'female' | 'other';

  @ApiProperty()
  dateOfBirth: Date;

  @ApiProperty()
  barCouncilName: string;

  @ApiProperty()
  yearsOfExperience: number;

  @ApiProperty()
  expertise: string[];

  @ApiProperty()
  qualification: string;

  @ApiProperty()
  bio: string;
}
