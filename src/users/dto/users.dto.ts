import { IsEmail, IsString, IsNumber, Length, Max, Min, Matches,} from "class-validator";

export class UserDto {
    @IsString()
    @Length(3, 10)
    username: string;

    @IsString()
    @Length(3, 10)
    surname: string;

    @IsNumber()
    @Max(55)
    @Min(16)
    age: number;

    @IsEmail()
    email: string;

    @IsString()
    @Length(6, 20)
    password: string;

    @IsString()
    @Length(6, 20)
    confirm_password: string;

    @IsString()
    @Length(5, 50)
    address: string;
}
