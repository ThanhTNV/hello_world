import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsInt } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsString()
    name: string;

    @IsInt()
    yob: number;
}
