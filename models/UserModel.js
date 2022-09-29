import { DataTypes } from "sequelize";
import { db } from "../configs/db.js";

export const User = db.define('users',{
    fullname:{
        type: DataTypes.STRING(255)
    },
    username:{
        type: DataTypes.STRING(255),
        unique:true
    },
    password:{
        type:DataTypes.STRING(255)
    }
})
User.sync()