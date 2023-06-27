"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("@fastify/cors"));
const jwt_1 = __importDefault(require("@fastify/jwt"));
const fastify_1 = __importDefault(require("fastify"));
const userAdm_1 = require("./userAdm");
const auth_1 = require("./auth");
const aluno_1 = require("./aluno");
const createAluno_1 = require("./createAluno");
async function bootstrap() {
    const server = (0, fastify_1.default)({
        logger: true,
    });
    server.register(cors_1.default, { origin: true });
    server.register(jwt_1.default, {
        secret: '012345'
    });
    // rotas
    server.register(userAdm_1.UserAdm);
    server.register(auth_1.authUser);
    server.register(aluno_1.User);
    server.register(createAluno_1.createAluno);
    server.listen({ port: 3000 }, (erroe, address) => {
        if (erroe) {
            console.error(erroe);
            process.exit(1);
        }
        else {
            console.log(`servidor rodando em ${address}`);
        }
    });
}
bootstrap();
