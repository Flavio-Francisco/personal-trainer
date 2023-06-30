import { FastifyInstance } from "fastify";
import { prisma } from "./lib/prisma";
import { z } from "zod";

export default async function UptadeTreino(serve:FastifyInstance) {
    serve.put("/updatetreino/:usuarioid"/*,{onRequest:[athenticate]}*/,async (request, reply )=>{

            const type =z.object({
                usuarioid:z.string()
            })
       

       const {usuarioid} = type.parse(request.params);
       const usuario = Number(usuarioid)

        console.log('====================================');
        console.log(usuarioid);
        console.log('====================================');
        const dataUpdate = z.object({
            name: z.string(),
            objetivo: z.string(),
            grupo:z.number().int(),
            exercico: z.string(),
            exercicoMobilidade: z.string(),
            repeticao: z.string(),
           
        }) 

        const updateTreino = dataUpdate.parse(request.body)
        console.log('====================================');
        console.log(updateTreino);
        console.log('====================================');
        const treinos = await prisma.treino.update({
            where:{
             usuarioId: usuario
            },
            data:{
                name:updateTreino.name,
                grupo:updateTreino.grupo,
                exercico:updateTreino.exercico,
                repeticao:updateTreino.repeticao,
                objetivo:updateTreino.objetivo,
                exercicoMobilidade:updateTreino.exercicoMobilidade,
            }
        });
        console.log(treinos);
        
        return reply.send({treinos})
    })
}