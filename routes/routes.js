import express from "express";
import { CreateCategory, DeleteCategory, ListAllCategory, ListCategoryId, UpdateCategory } from "../controllers/controllerCategory.js";
import { CreateProduct, DeleteProduct, ListAllProduct, ListProductId, UpdateProduct } from "../controllers/controllerProduct.js";
import { ListAllUser } from "../controllers/controllerUser.js";
const router = express.Router()


router.get('/category',ListAllCategory)
router.get('/category/:id',ListCategoryId)
router.post('/category/',CreateCategory)
router.patch('/category/:id',UpdateCategory)
router.delete('/category/:id',DeleteCategory)
router.get('/user/',ListAllUser)
router.get('/',ListAllProduct)
router.get('/:id',ListProductId)
router.post('/',CreateProduct)
router.patch('/:id',UpdateProduct)
router.delete('/:id',DeleteProduct)

export default router
