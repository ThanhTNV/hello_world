import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { UserDAO } from './user.dao';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, UserDAO],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});