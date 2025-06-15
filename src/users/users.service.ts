import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CommentModel } from 'src/models/comment.model';
import { PostModel } from 'src/models/posts.model';
import { UserModel } from 'src/models/user.model';
import { UserDto } from './dto/users.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(UserModel) private userModel: typeof UserModel) { }

    async create_user(payload: Required<UserDto>) {
        let newUser = await this.userModel.create(payload)
        return newUser
    }
    async findallusers() {
        let allusers = await this.userModel.findAll({
            include: {
                model: PostModel,
                include:[CommentModel]
            }
        })
        return allusers
    }
}
