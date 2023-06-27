"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAluno = void 0;
const prisma_1 = require("./lib/prisma");
const zod_1 = require("zod");
async function createAluno(serve) {
    serve.post('/create' /*,{onRequest:[athenticate]}*/, async (request, reply) => {
        const typeAluno = zod_1.z.object({
            name: zod_1.z.string(),
            email: zod_1.z.string().email(),
            usuario: zod_1.z.string(),
            senha: zod_1.z.string(),
        });
        const aluno = typeAluno.parse(request.body);
        const alunos = await prisma_1.prisma.aluno.findUnique({
            where: {
                email: aluno.email
            },
            select: {
                email: true,
            }
        });
        if (aluno.email == alunos?.email) {
            return reply.status(409).send("Já existe um usuário com este nome!");
        }
        else {
            const createAluno = prisma_1.prisma.aluno.create({
                data: {
                    name: aluno.name,
                    email: aluno.email,
                    usuario: aluno.usuario,
                    senha: aluno.senha,
                    adm: false
                }
            });
            return reply.status(200).send(createAluno);
        }
    });
}
exports.createAluno = createAluno;
