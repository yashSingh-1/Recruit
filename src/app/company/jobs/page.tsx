"use client";

import JobPosts from "@/components/JobPosts";
import { Button } from "@/components/ui/button";
import { FetchJobs } from "@/server/PrismaServerActions";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Function to generate and retrieve user ID
  const generateUniqueId = () =>
    "user-" + Math.random().toString(36).substring(2, 9);

  useEffect(() => {
    let storedUserId = localStorage.getItem("userId");
    if (!storedUserId) {
      storedUserId = generateUniqueId();
      localStorage.setItem("userId", storedUserId);
    }
    setUserId(storedUserId);
  }, []); // Runs once on mount

  console.log("USERID", userId);

  useEffect(() => {
    if (!userId) return; // Ensure userId is available before fetching

    const fetchData = async () => {
      try {
        setLoading(true);
        console.log("Fetching jobs for user:", userId);
        const jobData = await FetchJobs(userId);
        console.log("Fetched jobs:", jobData);
        setJobs(jobData || []); // Ensure we set an empty array if no data
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]); // Runs when userId is set

  return (
    <div className="flex flex-col p-5 bg-gradient-to-r from-slate-950 via-gray-900 to-black min-h-screen">
      <div className="flex justify-end">
        <Link href="/company/jobs/new">
          <Button className="uppercase font-extrabold rounded-3xl bg-white hover:bg-slate-300 text-black text-2xl font-mono">
            Create a job
          </Button>
        </Link>
      </div>

      <div>
        {loading ? (
          <div className="flex flex-col justify-center items-center h-screen">
            <div role="status" className="mb-2">
              <svg
                aria-hidden="true"
                className="w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
            <p className="text-white text-3xl font-mono">Loading Jobs</p>
          </div>
        ) : jobs.length > 0 ? (
          <div className="text-white">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="md:w-1/2 w-full"
              >
                <JobPosts
                  key={job.id}
                  title={job.jobTitle}
                  hook={job.jobHook}
                  companyName={job.CompanyName}
                  salary={job.Salary}
                  id={job.id}
                  jobDes={job.description}
                  tags={job.Tags}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-screen">
            <p className="text-white text-3xl font-mono">
              No jobs created by you yet!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
