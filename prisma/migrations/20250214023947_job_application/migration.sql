-- CreateTable
CREATE TABLE "JobApplication" (
    "userWhoHasAppliedId" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "candidateName" TEXT NOT NULL,
    "resume" TEXT NOT NULL,
    "coverLetter" TEXT NOT NULL,
    "Age" TEXT NOT NULL,
    "WhyDoYouWannaWorkHere" TEXT NOT NULL,
    "UniqueThingsYouGot" TEXT NOT NULL,
    "CGPA" TEXT NOT NULL,
    "WillingTORelocate" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "jobAppliedTo" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "JobApplication_id_key" ON "JobApplication"("id");

-- AddForeignKey
ALTER TABLE "JobApplication" ADD CONSTRAINT "JobApplication_jobAppliedTo_fkey" FOREIGN KEY ("jobAppliedTo") REFERENCES "JobDescription"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
