"use client";

import { Button } from "@/components/ui/button";
import { FetchJobs } from "@/server/Creating";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [userIdState, setUserStateID] = useState<string | null>(null);
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Function to generate & retrieve user ID
  const generateUniqueId = () => "user-" + Math.random().toString(36).substring(2, 9);

  useEffect(() => {
    let userId = localStorage.getItem("userId");
    if (!userId) {
      userId = generateUniqueId();
      localStorage.setItem("userId", userId);
    }
    setUserStateID(userId);
  }, []); // Runs only once when component mounts

  useEffect(() => {
    if (!userIdState) return; // Ensure userId is available before fetching

    async function fetchData() {
      try {
        setLoading(true);
        console.log("Fetching jobs for user:", userIdState);
        const jobData = await FetchJobs(userIdState!);
        console.log("Fetched jobs:", jobData);
        setJobs(jobData);
      } catch (err) {
        console.error("Error fetching jobs:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [userIdState]); // Runs when userIdState is set

  return (
    <div className="flex flex-col p-5 bg-gradient-to-r from-slate-950 via-gray-900 to-black min-h-screen">
      <div className="flex justify-end">
        <Link href={"/company/jobs/new"}>
          <Button className="uppercase font-extrabold rounded-3xl bg-white hover:bg-slate-300 text-black text-2xl font-mono">
            Create a job
          </Button>
        </Link>
      </div>
      <div>
        {loading ? (
          <p className="text-white">Loading jobs...</p>
        ) : jobs.length > 0 ? (
          <ul className="text-white">
            {jobs.map((job) => (
              <li key={job.id}>{job.title} - {job.companyName}</li>
            ))}
          </ul>
        ) : (
          <p className="text-white">No jobs found.</p>
        )}
      </div>
    </div>
  );
};

export default Page;
