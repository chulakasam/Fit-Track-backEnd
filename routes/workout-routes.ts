import express from "express";
import {AddWorkOut} from "../database/prisma-workout-data-store";

const router = express.Router();

router.post('/add',async (req, res) => {
    const new_workOut = req.body;
    try{
        const adding_workOut = await AddWorkOut(new_workOut);
        res.json(adding_workOut);
    }catch (error){
        console.log('error adding workout',error);
    }
})
export default router;