import database from '../createTable.js'





class foodManager{

    createNewFood= async (food)=>{
        // if(!food.name || !food.price) return {status:'Missing data'}
         try{
                
            await database('foods').insert(food)
            .then(()=>console.log('Productos guardados'))
    
                 
        }catch(error){
            return {status:'error', message:error }
        }
    }

    // pruebaChat=async(chatInfo)=>{
    //     try{
                
    //         database('foods').insert(chatInfo)
    //         .then(()=>console.log('Productos guardados'))
    
                 
    //     }catch(error){
    //         return {status:'error', message:error }
    //     }
    // }


    searchById=async(id)=>{
            try{       
            //WHERE
            // FIND BY ID 
            database.from('foods').select('*').where('id', id)
            .then(data=>{
                let findById = JSON.parse(JSON.stringify(data))
                console.log(findById) 
            })         
             
            }catch(error){
                return {status:'error', message:error }
            }
    }

    updateUsers=async(id, updatefood)=>{
        try{
             database.from('foods').where('id', id).update({name:updatefood})
            .then(data=>{
                let update = JSON.parse(JSON.stringify(data))
                console.log(update) 
            })
        }catch(error){
            return {status:'error', message:error}
        }
    }

    getAllfoods=async()=>{
 
        try{

           await database.select('*').from('foods').then(data=>{
               console.log(data)
                // let allFoods = JSON.parse(data)
                console.log(data)
                // return allFoods
            })

        }catch(error){
            return{status:error, message:error}
        }
    }

  
}

export default foodManager;