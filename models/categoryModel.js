import { DataTypes } from "sequelize";
import { db } from "../configs/db.js";

export const Category = db.define('categories',{
    category:{
        type:DataTypes.STRING(255)
    }
})
Category.sync()