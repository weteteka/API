import { Category } from "../models/categoryModel.js"

export const ListAllCategory = async (req,res) =>{
    try {
        const category = await Category.findAll()
        res.json(category)
    } catch (error) {
        res.json({message: error})
    }
}
export const ListCategoryId = async (req,res) =>{
    try {
        const category = await Category.findByPk(req.params.id)
        res.json(category)
    } catch (error) {
        res.json({message: error})
    }
}
export const CreateCategory = async (req,res) =>{
    try {
        await Category.create(req.body)
        res.json({message: 'Cadastrado com sucesso!'})
    } catch (error) {
        res.json({message: error})
    }
}
export const UpdateCategory = async (req,res) =>{
    try {
        await Category.update(req.body,{
            where:{
                id: req.params.id
            }
        })
        res.json({message: 'Editado com sucesso!'})
    } catch (error) {
        res.json({message: error})
    }
}
export const DeleteCategory = async (req,res) =>{
    try {
        await Category.destroy({
            where:{
                id: req.params.id
            }
        })
        res.json({message: 'Eliminado com sucesso!'})
    } catch (error) {
        res.json({message: error})
    }
}