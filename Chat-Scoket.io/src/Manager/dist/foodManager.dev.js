"use strict";

var _sqlConfig = _interopRequireDefault(require("../options/sqlConfig"));

var _knex = _interopRequireDefault(require("knex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var database = (0, _knex["default"])(_sqlConfig["default"]);
database.schema.createTable('foods', function (table) {
  table.increments('id');
  table.varchar('name', 30);
  table.varchar('description', 100);
  table.integer('price');
}).then(function () {
  return console.log('Table created foods');
})["catch"](function (err) {
  return console.log(err);
})["finally"](function () {
  return database.destroy();
}); // const fs = require('fs')
// const pathFood = __dirname + '/../files/pokemons'
// class foodManager{
//     createNewFood= async (food)=>{
//         // if(!pokemon.name | !pokemon.type) return {status:'Missing data'}
//         try{
//             if(fs.existsSync(pathFood)){
//                 let data = await fs.promises.readFile(pathFood, 'utf-8' ,null, 3)
//                 let foods = JSON.parse(data)
//                 let id= foods[foods.length-1].id +1
//                 food.id=id
//                 foods.push(food)
//                 await fs.promises.writeFile(pathFood, JSON.stringify(foods, null, 3))
//                 return {status:'success', message:'New food created',payload:foods}
//             }else{
//                 food.id=1
//                 await fs.promises.writeFile(pathFood, JSON.stringify([food], null, 3))
//                 return{status:'Succes', message:'First food created'}
//             }
//         }catch(error){
//             return {status:'error', message:error }
//         }
//     }
//     searchfood=async(name)=>{
//             try{                
//                 if(fs.existsSync(pathFood)){
//                     let data = await fs.promises.readFile(pathFood, 'utf-8' ,null, 3)
//                     let foods = JSON.parse(data)
//                     let findfood = foods.find(el=>(el.name=== name))
//                     return {status:'success', message:findfood}
//                 }
//             }catch(error){
//                 return {status:'error', message:error }
//             }
//     }
//     updateUsers=async(name, updatefood)=>{
//         try{
//             if(fs.existsSync(pathFood)){
//                 let data = await fs.promises.readFile(pathFood, 'utf-8' ,null, 3)
//                 let foods = JSON.parse(data)
//                 let newArrayUpdate= foods.map((food)=>{
//                     if(food.name === name){
//                         return updatefood
//                     }else{
//                         return food
//                     }
//                 })
//                 await fs.promises.writeFile(pathFood, JSON.stringify(newArrayUpdate, null, 3))
//                 return {status:'Succes', message:'update food' }
//             }
//         }catch(error){
//             return {status:'error', message:error}
//         }
//     }
//     getAllfoods=async()=>{
//         if(fs.existsSync(pathFood)){
//             try{
//                 let data = await fs.promises.readFile(pathFood, 'utf-8' ,null, 3)
//                 let foods = JSON.parse(data)
//                 return{status:'Succes, get all Pokmemons', payload:foods}
//             }catch(error){
//                 return{status:error, message:error}
//             }
//         }else{
//             return{status: 'Theres no foods', payload: [] }
//         }
//     }
// }
// module.exports=foodManager