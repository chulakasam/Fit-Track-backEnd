import {PrismaClient, WorkOut} from "@prisma/client";
import Workout from "../model/Workout";


const prisma = new PrismaClient();

export async function AddWorkOut(newWorkOut:Workout){
    try {
       const added_workOut=await prisma.workOut.create({
            data:{
                id:newWorkOut.id,
                workOutType:newWorkOut.workOutType,
                duration:newWorkOut.duration,
                goal:newWorkOut.goal,
                note:newWorkOut.note
            }
        });
       console.log('workout added successfully',added_workOut)
       return added_workOut;
    }catch (error){
        console.log('error added workout',error);
    }
}