import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDAO } from './user.dao';

@Injectable()
export class UserService {
  constructor(private userDAO: UserDAO) {}

  sigin(createUserDto: CreateUserDto) {
    return this.userDAO.create(createUserDto);
  }

  findAll() {
    const users = this.userDAO.findAll();
    const returnUsers = users.map((user) => {
      const { password, ...rest } = user;
      return rest;
    });
    return returnUsers;
  }

  findOne(id: number) {
    return this.userDAO.findOne(id);
  }

  async login(username: string, password: string): Promise<string> {
    const _username = username;
    const _password = password;
    try {
      const user = await this.userDAO.findUser(_username, _password);
      if (!user) {
        throw new Error('User not found');
      }
      return user.id.toString();
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
