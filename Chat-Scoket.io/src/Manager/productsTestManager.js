
import {faker} from '@faker-js/faker'



let array=[]

class ProductManager{

    createName=async(cant)=>{
        let i;

        for (i=0; i<cant; i++){
            const randomProduct = await faker.commerce.product() // Rowan Nikolaus
            const price = await faker.commerce.price()
            const randomAdjetive = await faker.commerce.productDescription()
            const productMaterial = await faker.commerce.productMaterial()

            array.push({product:randomProduct, price:price, adjetive:randomAdjetive,productMaterial:productMaterial })
        }
        return array;  
    }

    getAll=async()=>{
        return array;
    }
    
}

export default ProductManager;