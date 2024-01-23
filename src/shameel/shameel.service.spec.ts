import { Test, TestingModule } from '@nestjs/testing';
import { ShameelService } from './shameel.service';

describe('ShameelService', () => {
  let service: ShameelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShameelService],
    }).compile();

    service = module.get<ShameelService>(ShameelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
