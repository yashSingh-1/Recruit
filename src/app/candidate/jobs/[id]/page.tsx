"use client";
import { Button } from "@/components/ui/button";
import { Jobs } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

const page = () => {
  const pathname = usePathname();
  const id = pathname.split("/")[3];

  const item = Jobs.filter((item) => item.id === id);
  return (
    <div className="bg-gradient-to-r from-red-200 via-white to-blue-200 min-h-screen p-10 grid grid-cols-1 md:grid-cols-4">
      {item.map((stuff, index) => (
        <div key={index} className="flex flex-col col-span-3">
          <div className="text-3xl font-bold font-mono">{stuff.title}</div>
          <div className="text-xl font-mono">{stuff.companyName}</div>
          <div className="text-lg font-semibold mb-5">{stuff.location}</div>
          <div className="grid grid-cols-4 gap-x-2">
            <span className="text-slate-500 font-normal col-span-1">
              Overview:
            </span>
            <span className="col-span-3">{stuff.hook}</span>
          </div>
          <div className="grid grid-cols-4 gap-x-2">
            <span className="text-slate-500 font-normal">Job Description:</span>
            <span className="col-span-3">{stuff.jobDescription}</span>
          </div>
          <div className="grid grid-cols-4 gap-x-2">
            <span className="text-slate-500 font-normal">
              Job Requirements:
            </span>
            <span className="col-span-3">{stuff.qualificationsNeeded}</span>
          </div>
          <div className="grid grid-cols-4 gap-x-2">
            <span className="text-slate-500 font-normal">
              What is expected of you:
            </span>
            <span className="col-span-3">{stuff.whatYoullDo}</span>
          </div>
          <div className="grid grid-cols-4 gap-x-2">
            <span className="text-slate-500 font-normal">Salary:</span>
            <span className="col-span-3">{stuff.salary}</span>
          </div>
          <div className="grid grid-cols-4 gap-x-2">
            <span className="text-slate-500 font-normal">Location:</span>
            <span className="col-span-3">{stuff.location}</span>
          </div>
          <div className="grid grid-cols-4 gap-x-2">
            <span className="text-slate-500 font-normal">Tags:</span>
            <span className="col-span-3">{stuff.tags[0]}</span>
          </div>
          <div className="grid grid-cols-4 gap-x-2">
            <div />

            <Link href={`/candidate/apply/${id}`} className="border p-2 font-bold bg-blue-800 rounded-lg w-full flex justify-center mt-5 hover:bg-blue-600 text-white">Apply Now</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
