import { Sequelize } from 'sequelize'

const db = 'expressapp'
const username = 'edu'
const password = 'Ami16_Azu04%'

export const sequelize = new Sequelize(db, username, password, {
    dialect: "mysql",
    port: 3306,
});

sequelize.authenticate()