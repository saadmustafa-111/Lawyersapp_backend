import { Test, TestingModule } from '@nestjs/testing';
import { LawyerProfileService } from './lawyer-profile.service';

describe('LawyerProfileService', () => {
  let service: LawyerProfileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LawyerProfileService],
    }).compile();

    service = module.get<LawyerProfileService>(LawyerProfileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
