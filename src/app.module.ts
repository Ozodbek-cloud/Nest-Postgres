import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModel } from './models/user.model';
import { PostModel } from './models/posts.model';
import { CommentModel } from './models/comment.model';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),
  SequelizeModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => ({
      dialect: 'postgres',
      host: configService.get('DB_HOST'),
      port: +configService.get('DB_PORT'),
      username: configService.get('DB_USER'),
      password: configService.get('DB_PASSWORD'),
      database: configService.get('DB_DATABASE'),
      models: [UserModel, PostModel, CommentModel],
      autoLoadModels: true,
      synchronize: true
    })
  }),
    UsersModule, PostsModule, CommentsModule
  ],
})
export class AppModule { }
