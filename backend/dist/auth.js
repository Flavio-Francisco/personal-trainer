"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authUser = void 0;
const athenticate_1 = require("./plugins/athenticate");
async function authUser(fastify) {
    // rota de validação
    fastify.get('/me', {
        // o onRequest vai procura o úsuario que estar logado
        onRequest: [athenticate_1.athenticate]
    }, async (resquest) => {
        // função jwtVerify que estar na função athenticate, vai buscar os dados do usuario logado
        return { user: resquest.user };
    });
}
exports.authUser = authUser;
