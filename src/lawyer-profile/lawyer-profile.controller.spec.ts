import { Test, TestingModule } from '@nestjs/testing';
import { LawyerProfileController } from './lawyer-profile.controller';
import { LawyerProfileService } from './lawyer-profile.service';

describe('LawyerProfileController', () => {
  let controller: LawyerProfileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LawyerProfileController],
      providers: [LawyerProfileService],
    }).compile();

    controller = module.get<LawyerProfileController>(LawyerProfileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
