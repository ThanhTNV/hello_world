import { Controller, Get, Post, Patch, Delete, Param, Header, Query, Body, Session, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signin')
  create(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    return this.userService.sigin(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Post('login')
  login(@Body() body: {username: string; password: string}) {
    const { username, password } = body;
    return this.userService.login(username, password);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body(new ValidationPipe()) updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
