import express from 'express'
const router = express.Router()
import ProductManager from '../Manager/productsTestManager.js'



const newProduct = new ProductManager()

router.post('/:number', (req,res)=>{
    let number = req.params.number
    newProduct.createName(number).then(result=>res.send(result))
})

router.get('/',(req,res)=>{
    newProduct.getAll().then(result=>res.send(result))
})



export default router;