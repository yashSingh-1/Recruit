/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `JobDescription` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `JobDescription` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "JobDescription" ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "JobDescription_userId_key" ON "JobDescription"("userId");
