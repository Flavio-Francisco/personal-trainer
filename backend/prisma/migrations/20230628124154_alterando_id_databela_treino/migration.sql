/*
  Warnings:

  - The primary key for the `Treino` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Treino" DROP CONSTRAINT "Treino_pkey",
ADD CONSTRAINT "Treino_pkey" PRIMARY KEY ("usuarioId");
