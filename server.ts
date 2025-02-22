import express from 'express';
import clientRoutes from "./routes/client-routes";

const app = express();

app.use(express.json());

app.use('/',(req,res,next)=>{
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, content-type');

     next();
})



app.use('/client',clientRoutes);

app.listen('3000',()=>{
    console.log('server running in port 3000');
});