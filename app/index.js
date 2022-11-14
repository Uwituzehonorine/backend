import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import path from 'path'


import productsRoute from "./Routes/productsRoute";

const app = express();
app.use(cors());
app.use(express.json());


app.use('/static',express.static(path.join(__dirname,"assets")))

app.get("/",(req,res)=>{
    res.send("API orginal")
});

app.use("/products", productsRoute);




mongoose.connect("mongodb://127.0.0.1:27017/products").then(()=>{
    app.listen(4000,()=> {
        console.log("server is running on port 4000")
    });
    

});

export default express;