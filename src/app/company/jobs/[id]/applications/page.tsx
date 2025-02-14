
"use client";
import { FetchApplicantsFromTheJobId } from "@/server/PrismaServerActions";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

interface JobApplication {
  userWhoHasAppliedId: string;
  id: string;
  candidateName: string;
  resume: string;
  coverLetter: string;
  Age: string;
  WhyDoYouWannaWorkHere: string;
  UniqueThingsYouGot: string;
  CGPA: string;
  WillingTORelocate: string;
  location: string;
}

const Page = () => {
  const pathname = usePathname();
  const jobId = pathname.split("/")[3]; // Extract jobId from URL
  console.log("Job ID:", jobId);
  const [applicants, setApplicants] = useState<JobApplication[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!jobId) return; // Ensure jobId exists before fetching
  
    const fetchApplicants = async () => {
      try {
        setLoading(true);
        const response = await FetchApplicantsFromTheJobId(jobId);
  
        // ✅ Ensure we extract the correct array
        const appli = response?.applicantsId || []; 
        
        console.log("Applicants from API:", appli);
        setApplicants(appli); // Now setting an array, avoiding the type error
      } catch (error) {
        console.error("Error fetching applicants:", error);
        setApplicants([]); // Set empty array on error
      } finally {
        setLoading(false);
      }
    };
  
    fetchApplicants();
  }, [jobId]); // Fetch when jobId is available

  console.log("Applicants in State:", applicants);

  return (
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
          </div>
          <p className="text-white text-3xl font-mono">Loading Applicants...</p>
        </div>
      ) : applicants.length > 0 ? (
        <div className="text-white">
          {applicants.map((applicant, index) => (
            <div key={index} className="flex flex-col p-4 border-b text-xl text-black border-gray-500 bg-gray-100 md:w-1/2 w-full my-2 mx-4 rounded-2xl shadow-xl">
              <div className="text-xl space-x-2 ">
              <span className="text-sm">
                    Applicants&apos;s name: 
                </span>
                <span>
                {applicant.candidateName}
                </span>
                </div>
              <div className="gap-x-2">
                <span className="text-sm">
                    Resume Link: 
                </span>
                <span>
                {applicant.resume}
                </span>
                </div>
              <div className="space-x-2">
                <span className="text-sm">
                    Cover letter link:
                </span>
                <span>
                {applicant.coverLetter}

                </span>
              </div>
              <div className="space-x-2">
                <span className="text-sm">
                    Age of the Candidate : 
                </span>
                <span>
                {applicant.Age}

                </span>
              </div>
              <div>
                <span className="text-sm">Why he wants to work here: </span>
                <span>
                    {applicant.WhyDoYouWannaWorkHere}
                </span>
              </div>
              <div>
                <span className="text-sm">
                    Unique skills he got : 
                </span>
                <span>
                    {applicant.UniqueThingsYouGot }
                </span>
              </div>
              <div>
                <span className="text-sm">
                    CGPA : 
                </span>
                <span>
                    {applicant.CGPA}
                </span>
              </div>
              <div>
                <span className="text-sm">
                    Is he willing to relocate
                </span>
                <span>
                    {applicant.WillingTORelocate}
                </span>
              </div>
              <div>
                <span className="text-sm">
                    His current location : 
                </span>
                <span>
                    {applicant.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
        <p className="text-black text-3xl ">No applicants found.</p>

        </div>
      )}
    </div>
  );
};

export default Page;
