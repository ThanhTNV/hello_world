//// UserDAO is a Data Access Object (DAO) class that is responsible for 
//// handling the CRUD operations for the User entity. 
//// It contains methods for creating, reading, updating, and deleting user data. 
//// The methods in this class are called by the User service to interact with the 
//// database and perform the necessary operations on the User entity.

import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserDAO {
  private users: User[] = [
    {
      id: 1,
      username: 'user1',
      password: 'password123',
      email: 'test123@mailtome.com',
      name: 'John Doe',
      yob: 30,
    },
  ];
  create(createUserDto: CreateUserDto) {
    const user = { id: Date.now(), ...createUserDto };
    this.users.push(user);
    return user;
  }

  findAll(): any[] {
    return this.users;
  }

  findUser(username: string, password: string): User {
    return this.users.find(
      (user) => user.username === username && user.password === password,
    );
  }

  findOne(id: number): User {
    return this.users.find((user) => user.id === id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
