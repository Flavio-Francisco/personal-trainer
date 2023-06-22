
import { error, log } from 'console';
import { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { prisma } from './lib/prisma';



export async function User(fastify:FastifyInstance){
    fastify.post('/aluno', async (resquest, reply)=>{

          // criando tipagem com zod

        const type = z.object({
              email : z.string().email(),
              senha: z.string(),          
            })

             //recebendo dados de login

       const dados_usuario = type.parse(resquest.body)

        //fazendo consulta no banco de dados 
        //selecionando o úsuario pelo email 

       const usuarioPrisma = await prisma.aluno.findUnique({
       where:{
        email:dados_usuario.email,
       },
       select:{
        id: true,
        name: true,
        email: true,
        adm:true,
        senha:true,
        
        treino:{
          select:{
            name:true,
            reticao:true,
            exercico:true,
          },

        },
        avaliacao:true,
              
      }
       });
      
       // validando usuario

       if(dados_usuario.senha  != usuarioPrisma?.senha && dados_usuario.email != usuarioPrisma?.email){
        console.error(error)
        process.exit(1)
       }else{
         // inserindo informações do usuario no token
        const token = fastify.jwt.sign({
            name: usuarioPrisma.name,
             // o sub é, quem estar fazendo o login
             sub: usuarioPrisma.id,
        },{
           
            //definindo a data de expiração do token
            expiresIn:'0 day'
        })
        return {token}
       }
       
    })
}
