import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col p-5 bg-gradient-to-r from-slate-950 via-gray-900 to-black min-h-screen">
      <div className="flex justify-end">
      <Link href={"/company/jobs/new"}>
        <Button className="uppercase font-extrabold rounded-3xl bg-white hover:bg-slate-300 text-black text-2xl font-mono">
          Create a job
        </Button>
      </Link>
      </div>
    </div>
  );
};

export default page;
