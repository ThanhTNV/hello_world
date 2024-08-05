import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDAO } from './user.dao';

@Injectable()
export class UserService {
  constructor (private readonly userDAO: UserDAO) {}

  sigin(createUserDto: CreateUserDto) {
    return this.userDAO.create(createUserDto);
  }

  findAll() {
    return this.userDAO.findAll();
  }

  findOne(id: number) {
    return this.userDAO.findOne(id);
  }

  login(username: string, password: string) {
    return this.userDAO.login(username, password);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userDAO.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.userDAO.remove(id);
  }
}
