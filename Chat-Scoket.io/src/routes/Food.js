import express from 'express'
const router = express.Router()
import foodManager from './../Manager/foodManager.js'
import uploader from '../services/upload.js'



const newFood = new foodManager()

router.post('/', (req,res)=>{
    let food = req.body
    newFood.createNewFood(food).then(result=>res.send(result))
})

router.get('/:id',(req,res)=>{
    let id = req.params.id
    newFood.searchById(id).then(result=>console.log(result))
})


router.put('/:id', (req,res)=>{
    let id = req.params.id
    let updatefood = req.body
    newFood.updateUsers(id, updatefood).then(result=>console.log(result))
})


export default router;











