import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default async (req,res)=>{
    const {url} = req.body;
    const shortUrl = Math.random().toString(36).substr(2,5);

    const data = {url, shortUrl}
 
    res.status(200).send(data);

}