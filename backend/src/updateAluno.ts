import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "./lib/prisma";


export async function updateAluno(serve:FastifyInstance) {
    
    serve.put('/updatealuno/:id'/*,{onRequest:[athenticate]}*/,async(request, reply)=>{

        const type = z.object({
            id : z.string()
        })
        const {id} = type.parse(request.params);
        const alunoId = Number(id)

       console.log('====================================');
       console.log(alunoId);
       console.log('====================================');
       const typeAluno = z.object({
        name : z.string(),
        email : z.string().email(),
        usuario: z.string(),
        senha: z.string(),
    })
    const aluno = typeAluno.parse(request.body)
    console.log(aluno);

       const updateAluno = await prisma.aluno.update({
            where:{
                id:alunoId
            },
            data:{
                name:aluno.name,
                email:aluno.email,
                usuario:aluno.usuario,
                senha:aluno.senha,
                adm:false
            }

        })
        console.log('====================================');
        console.log(updateAluno);
        console.log('====================================');
        return reply.status(201).send(updateAluno)
        
    })
}