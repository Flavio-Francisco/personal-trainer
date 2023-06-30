import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "./lib/prisma";

export async function deleteAluno(server:FastifyInstance) {
    server.delete('/deletealuno/:id',async (request,reply) => {
        const type = z.object({
            id : z.string()
        })
        const {id} = type.parse(request.params);
        const alunoId = Number(id)

          const deleteTreino = prisma.treino.delete({
            where:{
                usuarioId:alunoId
            }
          }); 

          const deleteAVF =prisma.avaliacaoFisica.delete({
            where:{
                id:alunoId
            }
          }); 
          const deleteAluno = prisma.aluno.delete({
            where:{
                id:alunoId
            }
          })
        const transaction= await prisma.$transaction([deleteTreino,deleteAluno])
        console.log('====================================');
        console.log(transaction);
        console.log('====================================');
        return reply.send('Aluno deletado com sucesso!')
    })
}