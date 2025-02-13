import { FetchJobs } from "@/server/PrismaServerActions";
import React from "react";

const AllJobs = async ({ userId }: { userId: string }) => {
  const jobs1 = await FetchJobs(userId);
  return (
    <div>
      {jobs1.map((item) => (
        <div>{item.CompanyName}</div>
      ))}
    </div>
  );
};

export default AllJobs;
