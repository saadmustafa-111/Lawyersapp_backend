import { Module } from '@nestjs/common';
import { LawyerProfileService } from './lawyer-profile.service';
import { LawyerProfileController } from './lawyer-profile.controller';

@Module({
  controllers: [LawyerProfileController],
  providers: [LawyerProfileService],
})
export class LawyerProfileModule {}
