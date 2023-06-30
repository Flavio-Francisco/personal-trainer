
import { FastifyInstance } from "fastify";
import { prisma } from './lib/prisma';
import { z } from "zod";
import { athenticate } from "./plugins/athenticate";



export async function createAluno(serve: FastifyInstance) {
   
      serve.post('/create'/*,{onRequest:[athenticate]}*/,async(request ,reply)=>{

        const typeAluno = z.object({
            name : z.string(),
            email : z.string().email(),
            usuario: z.string(),
            senha: z.string(),
        })
        const queryAluno = typeAluno.parse(request.body)
        console.log(queryAluno);
        
        const alunos = await prisma.aluno.findUnique({
            where:{
               
                email:queryAluno.email
            },
            select:{
             
                email:true,
            }
        });
        if (queryAluno.email == alunos?.email ){
           return  reply.status(409).send("Já existe um usuário com este nome!")
        }
        const createAluno = await prisma.aluno.create({
                data:{
                    name:queryAluno.name,
                    email:queryAluno.email,
                    usuario:queryAluno.usuario,
                    senha:queryAluno.senha,
                    adm:false
                }
                
            })
            return reply.status(200).send(createAluno);
    })  
}