import { Test, TestingModule } from '@nestjs/testing';
import { UserDAO } from './user.dao';

describe('UserDAO', () => {
  let dao: UserDAO;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserDAO],
    }).compile();

    dao = module.get<UserDAO>(UserDAO);
  });

  it('should be defined', () => {
    expect(dao).toBeDefined();
  });
});