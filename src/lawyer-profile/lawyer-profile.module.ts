import { Module } from '@nestjs/common';
import { LawyerProfileService } from './lawyer-profile.service';
import { LawyerProfileController } from './lawyer-profile.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LawyerProfile, LawyerProfileSchema } from './entities/lawyer-profile.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: LawyerProfile.name, schema: LawyerProfileSchema }])
  ],
  controllers: [LawyerProfileController],
  providers: [LawyerProfileService],
})
export class LawyerProfileModule {}
