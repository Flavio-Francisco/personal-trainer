import { FastifyRequest } from "fastify";

export async function athenticate(resquest:FastifyRequest) {
    await resquest.jwtVerify()
}