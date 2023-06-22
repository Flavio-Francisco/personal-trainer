/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `AdmUser` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `adm` to the `AdmUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senha` to the `AdmUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuario` to the `AdmUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `adm` to the `Aluno` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senha` to the `Aluno` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuario` to the `Aluno` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AdmUser" ADD COLUMN     "adm" BOOLEAN NOT NULL,
ADD COLUMN     "senha" TEXT NOT NULL,
ADD COLUMN     "usuario" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Aluno" ADD COLUMN     "adm" BOOLEAN NOT NULL,
ADD COLUMN     "senha" TEXT NOT NULL,
ADD COLUMN     "usuario" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "AdmUser_email_key" ON "AdmUser"("email");
