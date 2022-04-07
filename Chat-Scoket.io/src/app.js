//Nuestro servidor
import express from 'express'
import {Server} from 'socket.io'
import foodRoutes from '../src/routes/Food.js'
import apiTestRoutes from '../src/routes/productsTest.js'
// import foodManager from './Manager/foodManager.js'
import foodManager from './Manager/mognooseProducts.js'
import {normalize,schema,denormalize} from 'normalizr'


const foodService = new foodManager;

import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));


const app = express()
app.use(express.json())

//Gltich=>process.env=> segun el entorno donde corra el proyecto, el entorno va a elegir el puerto dodne
 //quiero que se corra=> VARIABLE DE ENTORNO ALGO QUE VA A CAMBIAR SEGUN DODNE LO ESTE CORRIENDO
const PORT = process.env.PORT||8080
const server = app.listen(PORT, ()=>{console.log(`Listening on port chat ${PORT}`)})


app.use('/foods', foodRoutes)
app.use('/api/productos-test', apiTestRoutes)


const io = new Server(server)

//MIdleware que voy a utilizar para conectar con public
app.use(express.static(__dirname+'/public'))







//************MI CHAT*********************//
let log=[]

const chatData=[{}]



// let user;
// let message;

// let id;
// let firsName;
// let lastName;
// let alias;
// let tumbhnail;


//AHORA VAMOS A EMPALMAR WEBSOCKET Y EXPRESS

//io.on => es para quedarse esuchando (evento=>connection)
io.on('connection',async (socket)=>{
    console.log('Scoket connected')
    //El usuario pueda avisar a los demas cuando se conecta
    //socket.broadcast=>se utiliza cuando quieres emitir algo a todos los
    //sockets conectados menos a ti
    //cuando el usuario quiera emitir un evento menos para ti
    //POR CADA EMIT HAY UN ON
    socket.broadcast.emit('newUserConnected')
    socket.emit('log', log)
    //cuando llegue el mensaje...

    socket.on('message',async data=>{
        log.push(data)
        await foodService.create(data)
        chatData.push(data)
      
        chatData.push({messages:log})
        console.log(chatData)
        const messages = new schema.Entity('messages')
        const user = new schema.Entity('user')
        const id = new schema.Entity('id')
        const firsName = new schema.Entity('firstName')
        const lastName = new schema.Entity('lastName')
        const author = new schema.Entity('autor')
        const tumbhnail = new schema.Entity('foods')

        const normalizeSchema = new schema.Entity('foods',{
            
            user:user,
            // id:id,
            // firstName:firsName,
            // lastName:lastName,
            user:user,
            author:[messages]

        })
         const normalizeData = normalize(chatData, normalizeSchema)

         console.log(JSON.stringify(normalizeData, null, '\t'))


        io.emit('log',log)
     
    })


    socket.on('sendFood',async data=>{
        await foodService.create(data)
        chatData.push(data)
        // console.log(chatData)

        const foods = await foodService.read()
        // console.log(foods)



        io.emit('foodLog',foods)
    })





   


})


// const name = new schema.Entity('name')
// const lastName = new schema.Entity('lastName')
// const age = new schema.Entity('age')
// const alias = new schema.Entity('alias')
// const text = new schema.Entity('text')
// const chatSchema = new schema.Entity('log',{
//     name:name, 
//     lastName:lastName,
//     age:age,
//     alias:alias,
//     text:[text]
// })

// const normalizeData = normalize(log, chatSchema)
// console.log(JSON.stringify(normalizeData, null, '\t'))




// const text = new schema.Entity('message')
// const name = new schema.Entity('user')

// const chatSchema = new schema.Entity('log',{
// author:name,
// name:name, 
// nikName:name,
// message:[text]
// })

// const normalizeData = normalize(log, chatSchema)
// console.log(JSON.stringify(normalizeData, null, '\t'))










// const text = new schema.Entity('message')
// const name = new schema.Entity('user')

// const chatSchema = new schema.Entity('log',{
// author:name,
// name:name, 
// nikName:name,
// message:[text]
// })

// const normalizeData = normalize(log, chatSchema)
// console.log(JSON.stringify(normalizeData, null, '\t'))















// const id = new schema.Entity('id')
// const firstName = new schema.Entity('firstName')
// const lastName = new schema.Entity('lastName')
// const alias = new schema.Entity('alias')
// const tumbhnail = new schema.Entity('tumbhnail')

 // const text = new schema.Entity('message')
        // const name = new schema.Entity('user')



































































//         //Nuestro servidor
// import express from 'express'
// import {Server} from 'socket.io'
// import foodRoutes from '../src/routes/Food.js'
// import apiTestRoutes from '../src/routes/productsTest.js'
// import foodManager from './Manager/foodManager.js'
// import {normalize,schema,denormalize} from 'normalizr'


// const foodService = new foodManager;

// import * as url from 'url';
// const __filename = url.fileURLToPath(import.meta.url);
// const __dirname = url.fileURLToPath(new URL('.', import.meta.url));


// const app = express()
// app.use(express.json())

// //Gltich=>process.env=> segun el entorno donde corra el proyecto, el entorno va a elegir el puerto dodne
//  //quiero que se corra=> VARIABLE DE ENTORNO ALGO QUE VA A CAMBIAR SEGUN DODNE LO ESTE CORRIENDO
// const PORT = process.env.PORT||8080
// const server = app.listen(PORT, ()=>{console.log(`Listening on port chat ${PORT}`)})


// app.use('/foods', foodRoutes)
// app.use('/api/productos-test', apiTestRoutes)


// const io = new Server(server)

// //MIdleware que voy a utilizar para conectar con public
// app.use(express.static(__dirname+'/public'))







// //************MI CHAT*********************//
// let log=[]

// const chatData=[{}]



// // let user;
// // let message;

// // let id;
// // let firsName;
// // let lastName;
// // let alias;
// // let tumbhnail;


// //AHORA VAMOS A EMPALMAR WEBSOCKET Y EXPRESS

// //io.on => es para quedarse esuchando (evento=>connection)
// io.on('connection',async (socket)=>{
//     console.log('Scoket connected')
//     //El usuario pueda avisar a los demas cuando se conecta
//     //socket.broadcast=>se utiliza cuando quieres emitir algo a todos los
//     //sockets conectados menos a ti
//     //cuando el usuario quiera emitir un evento menos para ti
//     //POR CADA EMIT HAY UN ON
//     socket.broadcast.emit('newUserConnected')
//     socket.emit('log', log)
//     //cuando llegue el mensaje...

//     socket.on('message',data=>{
//         log.push(data)
      
//         chatData.push({messages:log})
//         console.log(chatData)
        
//         const messages = new schema.Entity('messages')
//         const user = new schema.Entity('user')
//         const id = new schema.Entity('id')
//         const firsName = new schema.Entity('firstName')
//         const lastName = new schema.Entity('lastName')
//         const alias = new schema.Entity('alias')
//         const tumbhnail = new schema.Entity('tumbhnail')

//         const normalizeSchema = new schema.Entity('chatData',{
            
//             user:user,
//             id:id,
//             firstName:firsName,
//             lastName:lastName,
//             alias:user,
//             message:[messages]

//         })
//          const normalizeData = normalize(chatData, normalizeSchema)
//         console.log(JSON.stringify(normalizeData, null, '\t'))
   

//         io.emit('log',log)
     
//     })


//     socket.on('sendFood',async data=>{
//         await foodService.createNewFood(data)
//         chatData.push(data)
//         // console.log(chatData)







//         const foods = await foodService.getAllfoods()
//         io.emit('foodLog',foods)
//     })





   


// })
