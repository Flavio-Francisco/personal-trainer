-- CreateTable
CREATE TABLE "AdmUser" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cref" TEXT NOT NULL,
    "especialidade" TEXT NOT NULL,

    CONSTRAINT "AdmUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Aluno" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Aluno_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Treino" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "objetivo" TEXT NOT NULL,
    "grupo" INTEGER NOT NULL,
    "exercico" TEXT NOT NULL,
    "exercicoMobilidade" TEXT NOT NULL,
    "reticao" TEXT NOT NULL,
    "usuarioId" INTEGER NOT NULL,

    CONSTRAINT "Treino_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AvaliacaoFisica" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "profissao" TEXT NOT NULL,
    "dataNacimento" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "praticaAlgumaAtividade" TEXT NOT NULL,
    "comoVeceTrabalha" TEXT NOT NULL,
    "FumaBebe" TEXT NOT NULL,
    "parenteComMorteInfarto" TEXT NOT NULL,
    "senteDor" TEXT NOT NULL,
    "qualIntensedade" TEXT NOT NULL,
    "IntermitenteOuConstante" TEXT NOT NULL,
    "limitaEmQueSituacao" TEXT NOT NULL,
    "posicoesPioramDor" TEXT NOT NULL,
    "tomaAlgumRemadio" TEXT NOT NULL,
    "doencaCronica" TEXT NOT NULL,
    "pesaoAterial" DOUBLE PRECISION NOT NULL,
    "frequenciaCardiaca" DOUBLE PRECISION NOT NULL,
    "massa" DOUBLE PRECISION NOT NULL,
    "estatura" DOUBLE PRECISION NOT NULL,
    "imc" DOUBLE PRECISION NOT NULL,
    "triceptal" DOUBLE PRECISION NOT NULL,
    "sobescapular" DOUBLE PRECISION NOT NULL,
    "peitoral" DOUBLE PRECISION NOT NULL,
    "axiliarMedia" DOUBLE PRECISION NOT NULL,
    "supraIliaca" DOUBLE PRECISION NOT NULL,
    "abdiminal" DOUBLE PRECISION NOT NULL,
    "coxa" DOUBLE PRECISION NOT NULL,
    "gorduraCorporal" DOUBLE PRECISION NOT NULL,
    "gorduraIdeal" DOUBLE PRECISION NOT NULL,
    "pesoTotal" DOUBLE PRECISION NOT NULL,
    "massaGordura" DOUBLE PRECISION NOT NULL,
    "masaMagra" DOUBLE PRECISION NOT NULL,
    "pesoIdeal" DOUBLE PRECISION NOT NULL,
    "pesoExcesso" DOUBLE PRECISION NOT NULL,
    "pescoco" DOUBLE PRECISION NOT NULL,
    "ombro" DOUBLE PRECISION NOT NULL,
    "peitoralPerimetria" DOUBLE PRECISION NOT NULL,
    "bracoDRelachado" DOUBLE PRECISION NOT NULL,
    "bracoERelachado" DOUBLE PRECISION NOT NULL,
    "antebracoD" DOUBLE PRECISION NOT NULL,
    "antebracoE" DOUBLE PRECISION NOT NULL,
    "bracoEContraido" DOUBLE PRECISION NOT NULL,
    "bracoDContraido" DOUBLE PRECISION NOT NULL,
    "cintura" DOUBLE PRECISION NOT NULL,
    "abdomen" DOUBLE PRECISION NOT NULL,
    "quadril" DOUBLE PRECISION NOT NULL,
    "coxaMediaD" DOUBLE PRECISION NOT NULL,
    "panturrilhaD" DOUBLE PRECISION NOT NULL,
    "coxaMediaE" DOUBLE PRECISION NOT NULL,
    "paturilhaE" DOUBLE PRECISION NOT NULL,
    "riscoCadioVascular" DOUBLE PRECISION NOT NULL,
    "flexaoBraco" DOUBLE PRECISION NOT NULL,
    "flexibidade" DOUBLE PRECISION NOT NULL,
    "resistenciaAbdominal" DOUBLE PRECISION NOT NULL,
    "agacamentoBracosACNota" DOUBLE PRECISION NOT NULL,
    "mao" TEXT NOT NULL,
    "nota" DOUBLE PRECISION NOT NULL,
    "notaD" DOUBLE PRECISION NOT NULL,
    "notaE" DOUBLE PRECISION NOT NULL,
    "fcBpm" DOUBLE PRECISION NOT NULL,
    "tornoseloParedNotaD" DOUBLE PRECISION NOT NULL,
    "tornoseloParedNotaE" DOUBLE PRECISION NOT NULL,
    "presaaoAterialPos" DOUBLE PRECISION NOT NULL,
    "frenquenciaCardiacaPos" DOUBLE PRECISION NOT NULL,
    "avaliadoID" INTEGER NOT NULL,

    CONSTRAINT "AvaliacaoFisica_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Aluno_email_key" ON "Aluno"("email");

-- AddForeignKey
ALTER TABLE "Treino" ADD CONSTRAINT "Treino_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AvaliacaoFisica" ADD CONSTRAINT "AvaliacaoFisica_avaliadoID_fkey" FOREIGN KEY ("avaliadoID") REFERENCES "Aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
