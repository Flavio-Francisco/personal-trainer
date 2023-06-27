"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const console_1 = require("console");
const zod_1 = require("zod");
const prisma_1 = require("./lib/prisma");
async function User(fastify) {
    fastify.post('/aluno', async (resquest, reply) => {
        // criando tipagem com zod
        const type = zod_1.z.object({
            email: zod_1.z.string().email(),
            senha: zod_1.z.string(),
        });
        //recebendo dados de login
        const dados_usuario = type.parse(resquest.body);
        //fazendo consulta no banco de dados 
        //selecionando o úsuario pelo email 
        const usuarioPrisma = await prisma_1.prisma.aluno.findUnique({
            where: {
                email: dados_usuario.email,
            },
            select: {
                id: true,
                name: true,
                email: true,
                adm: true,
                senha: true,
                treino: {
                    select: {
                        name: true,
                        reticao: true,
                        exercico: true,
                    },
                },
                avaliacao: true,
            }
        });
        // validando usuario
        if (dados_usuario.senha != usuarioPrisma?.senha && dados_usuario.email != usuarioPrisma?.email) {
            console.error(console_1.error);
            process.exit(1);
        }
        else {
            // inserindo informações do usuario no token
            const token = fastify.jwt.sign({
                name: usuarioPrisma.name,
                // o sub é, quem estar fazendo o login
                sub: usuarioPrisma.id,
            }, {
                //definindo a data de expiração do token
                expiresIn: '0 day'
            });
            return { token };
        }
    });
}
exports.User = User;
