import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PostModel } from 'src/models/posts.model';
import { PostDto } from './postDto/post.dto';

@Injectable()
export class PostsService {
    constructor(@InjectModel(PostModel) private postModel: typeof PostModel) { }

    async create_post(payload: Required<PostDto>) {
        let newPost = await this.postModel.create(payload)
        return newPost
    }
}
