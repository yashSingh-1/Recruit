-- DropIndex
DROP INDEX "JobDescription_userId_key";

-- AlterTable
ALTER TABLE "JobDescription" ALTER COLUMN "userId" DROP NOT NULL;
