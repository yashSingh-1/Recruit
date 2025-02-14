import JobCard from "@/components/JobCard";
import Sidebar from "@/components/Sidebar";
import { FetchAllJobs } from "@/server/PrismaServerActions";
import React from "react";

const page = async () => {
  const allJobs = await FetchAllJobs();
  console.log("allJobs in the trenches", allJobs);
  return (
    <div className="flex bg-gradient-to-r from-blue-100 via-white to-red-200">
      <Sidebar />
      <div className="grid grid-cols-1 md:grid-cols-2">
      {allJobs.map((item) => (
        <JobCard
        key={item.id}
        title={item.jobTitle}
        hook={item.jobHook}
        companyName={item.CompanyName}
        salary={item.Salary}
        id={item.id}
        jobDes={item.description}
        tags={item.Tags}
        />
      ))}
    </div>
    </div>
  );
};

export default page;
