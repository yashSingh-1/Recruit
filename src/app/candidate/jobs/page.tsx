import JobCard from "@/components/JobCard";
import Sidebar from "@/components/Sidebar";
import { Jobs } from "@/lib/constants";
import React from "react";

const page = () => {
  return (
    <div className="flex bg-gradient-to-r from-blue-100 via-white to-red-200">
      <Sidebar />
      <div className="grid grid-cols-1 md:grid-cols-2">
      {Jobs.map((item) => (
        <JobCard
          key={item.id}
          title={item.title}
          hook={item.hook}
          companyName={item.companyName}
          salary={item.salary}
          id={item.id}
          jobDes={item.jobDescription}
          tags={item.tags}
        />
      ))}
    </div>
    </div>
  );
};

export default page;
