import { IsNumber, IsString } from "class-validator";


export class CommentDto{
    @IsString()
    text: string
     
     @IsNumber()
     post_id: number

     @IsString()
     posts: string

}

