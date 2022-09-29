import { Product } from "../models/ProductModel.js";

export const ListAllProduct = async (req,res) =>{
    try {
        const product = await Product.findAll()
        res.json(product)
    } catch (error) {
        res.json({message: error})        
    }
}
export const ListProductId = async (req,res)=>{
    try {
        const product = await Product.findByPk(req.params.id)
        res.json(product)
    } catch (error) {
        res.json({message: error})
    }
}
export const CreateProduct = async (req,res)=>{
    try {
        await Product.create(req.body)
        res.json({message: 'Cadastrado com sucesso!'})
    } catch (error) {
        res.json({message: error})         
    }
}
export const UpdateProduct = async (req,res)=>{
    try {
        await Product.update(req.body,{
            where:{
                id:req.params.id
            }
        })
        res.json({message: 'Editado com sucesso!'})
    } catch (error) {
        res.json({message: error})         
    }
}
export const DeleteProduct = async (req,res)=>{
    try {
        await Product.destroy({
            where:{
                id:req.params.id
            }
        })
        res.json({message: 'Eliminado com sucesso!'})
    } catch (error) {
        res.json({message: error})         
    }
}