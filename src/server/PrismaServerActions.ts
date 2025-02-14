"use server";

import { db } from "@/lib/PrismaClient";

type Props = {
  userId: string;
  jobTitle: string;
  jobHook: string;
  CompanyName: string;
  Salary: string;
  description: string;
  whatHasToBeDone: string;
  qualifications: string;
  Tags: string;
  location: string;
};

export const CreateJob = async ({
  userId,
  jobTitle,
  jobHook,
  CompanyName,
  Salary,
  description,
  whatHasToBeDone,
  qualifications,
  Tags,
  location,
}: Props) => {
  const createdJob = await db.jobDescription.create({
    data: {
      userId: userId,
      jobTitle: jobTitle,
      jobHook: jobHook,
      CompanyName: CompanyName,
      Salary: Salary,
      description: description,
      whatHasToBeDone: whatHasToBeDone,
      qualifications: qualifications,
      Tags: Tags,
      location: location,
    },
  });

  return createdJob;
};

export const FetchJobs = async (userId: string) => {
  const jobs = await db.jobDescription.findMany({
    where: {
      userId: userId,
    },
  });
  console.log("Jobs from the server", jobs);
  return jobs;
};

export const FetchAllJobs = async () => {
  const allJobs = await db.jobDescription.findMany();
  console.log("All Josb from the server", allJobs);
  return allJobs;
};

export const FetchingAPerticularJob = async (jobUniquesID: string) => {
  const perticularJob = await db.jobDescription.findUnique({
    where: {
      id: jobUniquesID,
    },
  });

  console.log("Perticular job", perticularJob);
  return perticularJob;
};

// Job applications

type JobAppProps = {
  userWhoHasAppliedId: string;
  candidateName: string;
  resume: string;
  coverLetter: string;
  Age: string;
  WhyDoYouWannaWorkHere: string;
  UniqueThingsYouGot: string;
  CGPA: string;
  WillingTORelocate: string;
  location: string;
  jobAppliedTo: string;
};

export const CreatingAJobApplication = async ({
  userWhoHasAppliedId,
  candidateName,
  resume,
  coverLetter,
  Age,
  WhyDoYouWannaWorkHere,
  UniqueThingsYouGot,
  CGPA,
  WillingTORelocate,
  location,
  jobAppliedTo,
}: JobAppProps) => {
  const createdApplication = await db.jobApplication.create({
    data: {
      userWhoHasAppliedId,
      candidateName,
      resume,
      coverLetter,
      Age,
      WhyDoYouWannaWorkHere,
      UniqueThingsYouGot,
      CGPA,
      WillingTORelocate,
      location,
      jobAppliedTo,
    },
  });
  console.log("Application from the server", createdApplication)
  return createdApplication;
};

export const FetchApplicantsFromTheJobId = async (jobId: string) => {
  try {
    const jobExists = await db.jobDescription.findUnique({
      where: {
        id: jobId
      },
      select: {
        applicantsId: true
      }
    })
    console.log(jobExists, "fromthe server of")
    return jobExists;
  } catch (error) {
    console.log(error)
  }
}
