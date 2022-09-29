import { DataTypes } from "sequelize";
import { db } from "../configs/db.js";

export const Product = db.define('products',{
    produto:{
        type: DataTypes.STRING(255)
    },
    categoryId:{
        type: DataTypes.INTEGER,
        references:{
            model: 'categories',
            key:'id'
        }
    },
    price:{
        type: DataTypes.DECIMAL(12,2)
    },
    quantity:{
        type: DataTypes.INTEGER
    },
    tumb:{
        type:DataTypes.STRING(255)
    }
})

Product.sync()