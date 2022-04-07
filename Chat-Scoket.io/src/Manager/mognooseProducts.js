
import mongoose from 'mongoose'
import foodService from '../schemaContainer/chatModel.js'


//Connecting with db cloud
mongoose.connect('mongodb+srv://chantal:logaritmoC@cluster0.dpj6h.mongodb.net/akira?retryWrites=true&w=majority',
    {useNewUrlParser:true,
    useUnifiedTopology:true
},error=>{
    if(error)throw new Error('Cannot connect to my db')
    console.log('Connected db')
})


class ManagerMongo{

    create=async(food)=>{
    
        try{
            await foodService.insertMany([food])
            return{message:'Food created with MongoDB'}
        }catch(error){
            return{status:error}
        }
   
    }

    read=async()=>{
        try{
            let readData= await foodService.find()
            return {status:readData};
        }catch(error){
            return{status:error}
        }
    }

    // update=async(body_name,body)=>{
    //     try{
    //         await foodService.updateOne({name:body_name},{$set:{name:body.name, description:body.description}})
    //         // return {message:'Update food with MongoDB'}
    //     }catch(error){
    //         return{status:error}
    //     }

    // }

    // delete=async(body_delete)=>{
    //     try{
    //         await foodService.deleteOne({name:body_delete.name, description:body_delete.description })
    //         // return {message:'Delete product with MongoDB'}

    //     }catch(error){
    //         return{status:error}
    //     }
    // }

}



export default ManagerMongo;
