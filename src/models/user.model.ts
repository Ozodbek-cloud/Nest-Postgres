import { Model, Table, Column, IsEmail, BeforeCreate,  HasMany} from "sequelize-typescript";
import { PostModel } from "./posts.model";
import { DataTypes } from "sequelize";


@Table

export class UserModel extends Model {

    @Column({
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    user_id: number

  @Column({
    type: DataTypes.STRING,
    unique: true,
  })
  username: string;

  @Column({
    type: DataTypes.STRING,
    unique: true,
  })
  surname: string;

  @Column({
    type: DataTypes.INTEGER,
  })
  age: number;

  @IsEmail
  @Column({
    type: DataTypes.STRING,
    unique: true,
  })
  email: string;

  @Column({
    type: DataTypes.STRING,
  })
  password: string;

  @Column({
    type: DataTypes.STRING,
  })
  address: string;


  @BeforeCreate
  static RandomId(instance: UserModel) {                      // <= Bu ID uchun, register qilganda id beriladi, Erp login qilganda kerak boldi
    instance.id = Math.floor(10000 + Math.random() * 90000); 
  }
  @HasMany(() => PostModel)
  posts: PostModel
}