import React from "react";
import Link from "next/link";

type Props = {
  title: string;
  hook: string;
  companyName: string;
  salary: string;
  id: string;
  jobDes: string;
  tags: string;
};

const JobPosts = ({
  title,
  hook,
  companyName,
  salary,
  id,
  jobDes,
  tags,
}: Props) => {
  return (
    <div className="flex flex-col justify-start items-start border p-4 rounded-xl shadow-xl z-10 m-4 h-fit ">
      <div className="flex items-center gap-x-2">
        <span className="text-slate-500 text-sm">Company: </span>
        <span className="text-lg font-mono">{companyName}</span>
      </div>
      <div className="flex my-2 gap-x-2">

          <div className="rounded-lg bg-red-200 font-light px-2 ">
            {tags}
          </div>

      </div>
      <div className="text-2xl w-3/4 font-bold font-mono flex gap-x-4 truncate overflow-hidden">{title}</div>
      <div className="text-xs my-2 text-slate-600 font-extralight">{hook}</div>
      <div className="text-sm text-slate-600 font-light ">{jobDes}</div>
      <div className="flex gap-x-4 items-center my-2">
        <span className="text-sm text-slate-700">Salary:</span>
        <div className="font-bold font-lg">${salary}</div>
      </div>
      <div className="flex justify-start mt-2 w-full gap-x-4">
        <Link
          className="bg-blue-800 rounded-xl w-1/2 p-2 text-lg font-mono text-white hover:bg-blue-600 font-bold uppercase flex justify-center items-center"
          href={`/company/jobs/${id}/applications`}
        >
          View Candidates
        </Link>

        <Link
          className="bg-white rounded-xl w-1/2 p-2 text-lg font-mono font-bold uppercase flex justify-center items-center text-black border hover:bg-slate-100"
          href={`/candidate/jobs/${id}`}
        >
          Details
        </Link> 
      </div>
    </div>
  );
};

export default JobPosts;
