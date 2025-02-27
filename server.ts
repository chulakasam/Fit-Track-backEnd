import express from 'express';
import clientRoutes from "./routes/client-routes";
import workoutRoutes from "./routes/workout-routes";
import authRoutes, {authenticateToken} from "./routes/authRoutes";
import dotenv from "dotenv";
import cors from 'cors';



const app = express();

app.use(express.json());
dotenv.config();

app.use(cors({
    origin: 'http://localhost:8081',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));


// app.use('/',(req,res,next)=>{
//      res.header("Access-Control-Allow-Origin", "*");
//      res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
//      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, content-type');
//
//      next();
// })


app.use('/auth',authRoutes);
app.use('/client',clientRoutes);
app.use('/workout',workoutRoutes);
app.listen('3000',()=>{
    console.log('server running in port 3000');
});

console.log("Loaded SECRET_KEY:", process.env.SECRET_KEY);
app.use(authenticateToken);