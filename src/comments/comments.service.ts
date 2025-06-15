import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CommentModel } from 'src/models/comment.model';
import { CommentDto } from './commentDto/comments.dto';

@Injectable()
export class CommentsService {
    constructor(@InjectModel(CommentModel) private commentModel: typeof CommentModel) { }
    
        async create_comment(payload: Required<CommentDto>) {
            let newComment = await this.commentModel.create(payload)
            return newComment
        }
}
