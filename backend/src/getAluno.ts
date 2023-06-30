import { FastifyInstance } from "fastify";
import { prisma } from "./lib/prisma";
import { z } from "zod";


export default async function getAluno(serve:FastifyInstance) {
    serve.get("/queryaluno/:name",async ( request,reply)=>{


        const typeName = z.object({

            name:z.string()
        })

        type typeName =z.infer<typeof typeName>;

        const {name} = typeName.parse(request.params)
        console.log(name);
     
        
        const aluno = await prisma.aluno.findMany({
         where:{
            name:{
                contains:name
            }
         
         },
         select:{
            name:true,
            usuario:true,
         }
        });
        console.log(aluno);
        
        return reply.send({aluno})
    })
}