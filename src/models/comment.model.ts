import { DataTypes } from "sequelize";
import { Model, Table, Column, ForeignKey, BelongsTo } from "sequelize-typescript";
import { PostModel } from "./posts.model";

@Table

export class CommentModel extends Model {
    @Column({
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    commit_id: number

    @Column({
        type: DataTypes.STRING
    })
    text: string

    @ForeignKey(() => PostModel)
    post_id: number

    @BelongsTo(() => PostModel)
    posts: PostModel
}