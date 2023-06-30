import cors from "@fastify/cors";
import jwt from "@fastify/jwt";
import fastify from "fastify";
import { UserAdm } from "./userAdm";
import { authUser } from "./auth";
import { User } from "./aluno";
import { createAluno } from "./createAluno";
import { createTreino } from "./createTreino";
import getTreino from "./getreino";
import getAluno from "./getAluno";
import UptadeTreino from "./updateTreino";
import { updateAluno } from "./updateAluno";


async function bootstrap() {

    const server = fastify({
        logger: true,
    });
    

server.register(cors,{origin:true})
server.register(jwt,{
    secret:'012345'  
  })

// rotas

server.register(UserAdm)
server.register(authUser)
server.register(User)
server.register(createAluno)
server.register(createTreino)
server.register(getTreino)
server.register(getAluno)
server.register(UptadeTreino)
server.register(updateAluno)



server.listen({port:3000},(erroe, address)=>{
    if (erroe) {
        console.error(erroe)
        process.exit(1);
    }else{
        console.log(`servidor rodando em ${address}`);
        
    }
})
}
bootstrap();