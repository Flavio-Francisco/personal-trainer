import cors from "@fastify/cors";
import fastify from "fastify";

const server = fastify();

server.register(cors,{origin:true})

server.listen({port:3000},(erroe, address)=>{
    if (erroe) {
        console.error(erroe)
        process.exit(1);
    }else{
        console.log(`servidor rodando em ${address}`);
        
    }
})