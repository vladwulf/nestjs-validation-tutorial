import { IsEmail, IsNumber, IsString } from 'class-validator';

export class PostRouteDto {
  @IsNumber()
  id: number;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
