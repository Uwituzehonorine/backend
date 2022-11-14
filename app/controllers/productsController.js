
import product from '../models/product';

class productsController{

   static async getAllproducts(req,res){
        const Allproducts = await product.find();
        res.send({data:Allproducts});
    
    }
    static async createProduct(req,res){
        try {
            const newProduct = new product({
                title:req.body.title,
                price:req.body.price,
                image:req.file.filename
        
            });
            newProduct.save();
            res.send(newProduct)
    
    
            
        } catch (error) {
            res.status(500).send({message:"internal error not responding",error:error.message})
            
        }
       
    }
}


export default  productsController;