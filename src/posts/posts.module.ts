import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { PostModel } from 'src/models/posts.model';
import { PostsController } from './posts.controller';

@Module({
  imports: [SequelizeModule.forFeature([PostModel])],
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule {

}
