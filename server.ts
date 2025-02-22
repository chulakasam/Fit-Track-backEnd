import express from 'express';
import clientRoutes from "./routes/client-routes";

const app = express();

app.use(express.json());
app.use('/client',clientRoutes);

app.listen('3000',()=>{
    console.log('server running in port 3000');
});