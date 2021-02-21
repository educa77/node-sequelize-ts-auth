import * as Sequelize from 'sequelize';
import { sequelize } from '../instances/sequelize'

export interface UserAddModel {
    email: string
    password: string
}

export interface UserModel extends Sequelize.Model<UserModel, UserAddModel> {
    id: number
    email: string;
    password: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}

export interface UserViewModel {
    id: number
    email: string
    password: string
}
export interface UserIdModel {
    id: number
    email: string
    password: string
}

export const User = sequelize.define<UserModel, UserViewModel>("user", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: Sequelize.STRING,
    password: Sequelize.STRING
})