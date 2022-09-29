import {Sequelize} from 'sequelize'

export const db = new Sequelize('mercearia','root','',{
    host: 'localhost',
    dialect: 'mysql'
})