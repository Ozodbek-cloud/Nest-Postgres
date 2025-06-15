import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CommentModel } from 'src/models/comment.model';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';

@Module({
    imports: [SequelizeModule.forFeature([CommentModel])],
    controllers: [CommentsController],
    providers: [CommentsService]
})
export class CommentsModule { }
