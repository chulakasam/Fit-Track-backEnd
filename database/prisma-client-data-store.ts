import { PrismaClient } from "@prisma/client";
import Client from "../model/Client";

const prisma = new PrismaClient();

export async function AddClient(newClient:Client){
    try{
        const addedClient=await prisma.client.create({
            data:{
                id:newClient.id,
                name:newClient.name,
                height:newClient.height,
                weight:newClient.weight,
                age:newClient.age,
                dob:newClient.dob,
                gender:newClient.gender,
                image:newClient.image
            }
        });
        console.log('client added successfully',addedClient);
        return addedClient;
    }catch (error){
        console.log('error added client');
    }
}
