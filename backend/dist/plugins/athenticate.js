"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.athenticate = void 0;
async function athenticate(resquest) {
    await resquest.jwtVerify();
}
exports.athenticate = athenticate;
