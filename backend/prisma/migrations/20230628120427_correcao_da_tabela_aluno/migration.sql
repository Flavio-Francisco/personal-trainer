/*
  Warnings:

  - You are about to drop the column `reticao` on the `Treino` table. All the data in the column will be lost.
  - Added the required column `repeticao` to the `Treino` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Treino" DROP COLUMN "reticao",
ADD COLUMN     "repeticao" TEXT NOT NULL;
