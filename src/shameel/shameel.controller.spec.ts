import { Test, TestingModule } from '@nestjs/testing';
import { ShameelController } from './shameel.controller';

describe('ShameelController', () => {
  let controller: ShameelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShameelController],
    }).compile();

    controller = module.get<ShameelController>(ShameelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
