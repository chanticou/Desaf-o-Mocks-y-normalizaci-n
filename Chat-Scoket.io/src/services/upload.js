import multer from 'multer'

//dodne se van a guardar los archivos
let storage = multer.diskStorage({
    //en que carpeta voy a guardar los archivos
    destination:function(req,file,callback){
        callback(null,__dirname+'/../public/img')
    },
    //como se va a llamar mi archivo
    filename:function(req, file, callback){
        callback(null, file.originalname )
    }

})

//Para que utilizen mi multer los demas archivos creo una avriable
// y ejecuto multer dodne su storage va a ser toda la configuraci0on
//que acabo de generar
const uploader = multer({storage:storage})

//ahora lo voy a exportar

export default uploader;