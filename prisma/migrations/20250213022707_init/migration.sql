-- CreateTable
CREATE TABLE "JobDescription" (
    "id" TEXT NOT NULL,
    "jobTitle" TEXT NOT NULL,
    "jobHook" TEXT NOT NULL,
    "CompanyName" TEXT NOT NULL,
    "Salary" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "whatHasToBeDone" TEXT NOT NULL,
    "qualifications" TEXT NOT NULL,
    "Tags" TEXT NOT NULL,
    "location" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "JobDescription_id_key" ON "JobDescription"("id");
