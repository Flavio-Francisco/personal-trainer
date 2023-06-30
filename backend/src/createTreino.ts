import { FastifyInstance } from "fastify";
import { athenticate } from "./plugins/athenticate";
import { z } from "zod";
import { prisma } from "./lib/prisma";



export async function createTreino(server:FastifyInstance) {

    server.post('/createTreino' /*,{onRequest:[athenticate]}*/,async (request,reply) => {
        
        const body = z.object({
            name: z.string(),
            objetivo: z.string(),
            grupo:z.number().int(),
            exercico: z.string(),
            exercicoMobilidade: z.string(),
            repeticao: z.string(),
        })
        const newTreino = body.parse(request.body)
        console.log('treino',newTreino);
        // buscando se o aluno já tem treino pelo nome, trazendo o nome é a chave do treino se exitir
        const nameAluno = await prisma.aluno.findMany({
        where:{
            name: newTreino.name
        },
        select:{
            id: true,
            name:true,
            treinoID:true
        }
        }) 
        // conferindo se o aluno tem treino
       
        const[ id ]= nameAluno.map((t ) =>t.id)
        
        console.log(id);

        // se existir um treino vai atualizar se não vai criar um novo
        
         const createTreino = await prisma.treino.upsert({
            where:{
                usuarioId:id,

            },
            update:{
                name:newTreino.name,
                grupo:newTreino.grupo,
                exercico:newTreino.exercico,
                repeticao:newTreino.repeticao,
                objetivo:newTreino.objetivo,
                exercicoMobilidade:newTreino.exercicoMobilidade,
            },
            create:{
                name:newTreino.name,
                grupo:newTreino.grupo,
                exercico:newTreino.exercico,
                repeticao:newTreino.repeticao,
                objetivo:newTreino.objetivo,
                exercicoMobilidade:newTreino.exercicoMobilidade,
                
            }
         })   
         console.log(createTreino);
         
         
          return reply.status(201).send({createTreino})
            
    })

    
    
}