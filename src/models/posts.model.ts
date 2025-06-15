import { DataTypes } from "sequelize";
import { Model, Table, Column, ForeignKey, BelongsTo, HasMany } from "sequelize-typescript";
import { UserModel } from "./user.model";
import { CommentModel } from "./comment.model";

@Table

export class PostModel extends Model {

    @Column({
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    post_id: number

    @Column({
        type: DataTypes.STRING,

    })
    title: string;

    @Column({
        type: DataTypes.STRING,

    })
    Content: string;

    @Column({
        type: DataTypes.ENUM("Good", "Bad", "Normal"),
        allowNull: false
    })
    status: string;

    @ForeignKey(() => UserModel)
    user_id: number

    @BelongsTo(() => UserModel)
    users: UserModel

    @HasMany(() => CommentModel)
    comments: CommentModel
}