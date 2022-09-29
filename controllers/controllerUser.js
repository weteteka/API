import { User } from "../models/UserModel.js"

export const ListAllUser = async (req,res) =>{
    try {
        const user = await User.findAll()
        res.json(user)
    } catch (error) {
        res.json({message: error})        
    }
}