import express from "express";
import {AddClient} from "../database/prisma-client-data-store";

const router = express.Router();

router.post('/add',async (req, res) => {
    const newClient = req.body;
    try {
        const addingClient = await AddClient(newClient);
        res.json(addingClient);
    }catch (error){
        console.log('error adding new client',error);
    }

});

export default router;