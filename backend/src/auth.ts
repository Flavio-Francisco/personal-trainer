
import { FastifyInstance } from 'fastify';
import { athenticate } from './plugins/athenticate';


export async function authUser(fastify:FastifyInstance){
    // rota de validação
    fastify.get('/me',{
        // o onRequest vai procura o úsuario que estar logado
        onRequest:[athenticate]
    }, async (resquest)=>{
        // função jwtVerify que estar na função athenticate, vai buscar os dados do usuario logado

        return{user: resquest.user}
    })
}