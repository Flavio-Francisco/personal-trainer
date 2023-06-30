import { FastifyInstance } from "fastify";
import { prisma } from "./lib/prisma";
import { z } from "zod";

export default async function getTreino(serve:FastifyInstance) {
    serve.get("/querytreino/:name",async (request, reply )=>{

        const typeName = z.object({

            name:z.string()
        })

        type typeName =z.infer<typeof typeName>;

        const{name} = typeName.parse(request.params)
        console.log(name);
        
        const treinos = await prisma.treino.findMany({
            where:{
                usuario:{
                    name:{
                        contains:name
                    }
                },
            }
        });
        console.log(treinos);
        
        return reply.send({treinos})
    })
}