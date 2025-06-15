import { Body, Controller, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostModel } from 'src/models/posts.model';
import { PostDto } from './postDto/post.dto';

@Controller('posts')
export class PostsController {
    constructor(private readonly postService: PostsService) { }

    @Post("create")
    createUser(@Body() payload: Required<PostDto>) {
        return this.postService.create_post(payload)
    }
}

