import { IsString, IsEnum, IsNotEmpty, IsOptional, IsInt } from 'class-validator';

export enum PostStatus {
  Good = "Good",
  Bad = "Bad",
  Normal = "Normal"
}

export class PostDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  Content: string;

  @IsEnum(PostStatus)
  status: PostStatus;

  @IsInt()
  @IsNotEmpty()
  user_id: number;
}
