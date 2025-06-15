import { Body, Controller, Post } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentModel } from 'src/models/comment.model';
import { CommentDto } from './commentDto/comments.dto';
@Controller('comments')
export class CommentsController {
    constructor(private readonly commentService: CommentsService) { }
    
        @Post("create")
        createUser(@Body() payload: Required<CommentDto>) {
            return this.commentService.create_comment(payload)
        }
}
