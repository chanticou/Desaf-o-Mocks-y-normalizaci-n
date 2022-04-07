
import mongoose from 'mongoose'

const foodCollection = 'foods'

const foodSchema = new mongoose.Schema({
    // let user;
// let message;

// let id;
// let firsName;
// let lastName;
// let alias;
// let tumbhnail;
    id:{
        type:Number,
        required:true
    },
    message:{
        type:[],
        required:true
    },
    user:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    alias:{
        type:String,
        required:true
    },
    thumbnail:String
})


export default mongoose.model(foodCollection, foodSchema)