//inicializo socket.io del ladod el front
const socket = io()
let user;

let chatBox = document.getElementById('chatBox')

let form = document.getElementById('foodForm')
let foods;



form.addEventListener('submit',(evt)=>{
    evt.preventDefault()
    let data= new FormData(form)
    let obj={}
    data.forEach((val,key)=>obj[key]=val)
    socket.emit('sendFood',obj)
    form.reset()
})

//ahora las tarigo a las comidas
// socket.on('foodLog', (data)=>{
//      foods = data.payload
//     let table = document.getElementById('table')
//     let foodsStryng=''
//     foods.forEach(food=>{
//         foodsStryng = foodsStryng+`
//       <tr>
//       <th scope="col">${food.id}</th>
//         <th scope="col">${food.firstName}</th>
//         <td scope="col">${food.lastName}</td>
//         <td scope="col">${food.alias}</td>
//         <td scope="col">${food.thumbnail}</td>
//       </tr>
//     `
//     })
    
//     table.innerHTML=foodsStryng
//     moment().format('MMMM Do YYYY, h:mm:ss a')
// })

//*****************************CHATBOOX***********************************//
console.log(foods)

swal.fire({
    title:'IDENTIFY YOURSELF',
    input:'text',
   
    text:"Please, enter you're user",
    
    // inputValidator:(value)=>{
    //     return !value && "Please login!"
    // },
    allowOutsideClick:false
}).then(result=>{
    user=result.value

})




//POR CADA EMIT HAY UN ON
// socket.broadcast.emit('newUserConnected')

//pongo socket.on + nombre evento
//le digo que hay un nuevo usuario coenctado

socket.on('newUserConnected',(data)=>{
    //llamo al sweet alert
    Swal.fire({
        icon:'succes',
        text:`New user connected: ${user}`,
        toast:true,
        position:'top-right'
    })
})



socket.on('log', data=>{
    let history = document.getElementById('history')
    let messages=''
    data.forEach(message=>{
        messages= messages+ `</br>${message.user} Says: ${message.message}</br>`
    })
    history.innerHTML=messages
})


chatBox.addEventListener('keyup', (evt)=>{
    if(evt.key==='Enter'){
        if(chatBox.value.trim().length>0 || chatBox.value===''){
            socket.emit('message', {user:user,  message:chatBox.value})
            chatBox.value=''
        }

    }
})




















// const prueba = async () => {
//     const {
//         value: formValues
//     } = await new swal({
//         title: 'Log in',
//         html: '<label>First name:</label>' +
//             '<input id="swal-input1" class="swal2-input">' +
//             '<label>Last Name:</label>' +
//             '<input id="swal-input2" class="swal2-input">' +
//             '<label>Age:</label>' +
//             '<input id="swal-input3" class="swal2-input">' +
//             '<label>Alias:</label>' +
//             '<input id="swal-input4" class="swal2-input">' +
//             '<label>Avatar:</label>' +
//             '<input id="swal-input5" class="swal2-input">',
//         focusConfirm: false,
//         allowOutsideClick: false,
//         preConfirm: () => {
//             return {
//                 first_name: document.getElementById('swal-input1').value,
//                 last_name: document.getElementById('swal-input2').value,
//                 age: document.getElementById('swal-input3').value,
//                 alias: document.getElementById('swal-input4').value,
//                 avatar: document.getElementById('swal-input5').value
//             }
//         }
//     })
//     if (formValues) {
//         console.log(formValues)
//     }

// }

// prueba()