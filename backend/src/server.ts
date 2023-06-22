import cors from "@fastify/cors";
import jwt from "@fastify/jwt";
import fastify from "fastify";


async function bootstrap() {

    const server = fastify({
        logger: true,
    });
    

server.register(cors,{origin:true})
server.register(jwt,{
    secret:'012345'  
  })

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