import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDAO } from './user.dao';
import { log } from 'console';

@Injectable()
export class UserService {
  constructor(private readonly userDAO: UserDAO) {}

  sigin(createUserDto: CreateUserDto) {
    return this.userDAO.create(createUserDto);
  }

  findAll() {
    return this.userDAO.findAll();
  }

  findOne(id: number) {
    return this.userDAO.findOne(id);
  }

  async login(username: string, password: string): Promise<string> {
    const _username = username;
    const _password = password;
    try {
      const users = await this.userDAO.findAll();
      const user = users.find(
        (user) => user.username === _username && user.password === _password,
      );
      if (user) {
        return user.id.toString();
      }
      return '';
    } catch (error) {
      console.log(error);
      throw new Error('Error in login');
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userDAO.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.userDAO.remove(id);
  }
}
