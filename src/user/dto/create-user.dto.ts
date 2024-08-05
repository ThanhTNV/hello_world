import { IsString, IsEmail, IsInt, MinLength, MaxLength } from 'class-validator';
export class CreateUserDto {
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    username: string;

    @IsString()
    @MinLength(8)
    password: string;

    @IsEmail()
    email: string;

    @IsString()
    name: string;

    @IsInt()
    age: number;
}
