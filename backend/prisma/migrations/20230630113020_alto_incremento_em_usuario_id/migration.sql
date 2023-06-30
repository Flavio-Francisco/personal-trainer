-- AlterTable
CREATE SEQUENCE treino_usuarioid_seq;
ALTER TABLE "Treino" ALTER COLUMN "usuarioId" SET DEFAULT nextval('treino_usuarioid_seq');
ALTER SEQUENCE treino_usuarioid_seq OWNED BY "Treino"."usuarioId";
