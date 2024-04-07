-- CreateEnum
CREATE TYPE "DurationType" AS ENUM ('SHORT', 'MEDIUM', 'LONG');

-- CreateTable
CREATE TABLE "ScreenEntertainment" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "duration" "DurationType" NOT NULL,
    "synopsis" TEXT,
    "imdbScore" TEXT,
    "type" TEXT NOT NULL,
    "director" TEXT,
    "watched" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "ScreenEntertainment_pkey" PRIMARY KEY ("id")
);
