-- CreateEnum
CREATE TYPE "Status" AS ENUM ('DONE', 'PENDING');

-- CreateTable
CREATE TABLE "Todo" (
    "id" TEXT NOT NULL,
    "task" TEXT NOT NULL,
    "status" "Status" NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);
