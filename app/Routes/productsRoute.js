import express from 'express';
import productsController from '../controllers/productsController';
import multer from 'multer';
import uploader from '../utils/uploader';


const router = express.Router();

router.get("/",productsController.getAllproducts);

    // res.send("products routes");
    //backend


router.post("/",uploader.single("image"),productsController.createProduct);
    // res.send("Adding product");
export default router;
