//// UserDAO is a Data Access Object (DAO) class that is responsible for 
//// handling the CRUD operations for the User entity. 
//// It contains methods for creating, reading, updating, and deleting user data. 
//// The methods in this class are called by the User service to interact with the 
//// database and perform the necessary operations on the User entity.

import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserDAO {
  private users = [];
  create(createUserDto: CreateUserDto) {
    const user = { id: Date.now(), ...createUserDto };
    this.users.push(user);
    return user;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  login(username: string, password: string) {
    return `This action logs in a user with username: ${username} and password: ${password}`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
