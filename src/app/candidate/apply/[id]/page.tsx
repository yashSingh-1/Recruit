"use client";

import { Jobs } from "@/lib/constants";
import { usePathname } from "next/navigation";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const page = () => {
  const pathname = usePathname();
  const id = pathname.split("/")[3];
  const Job = Jobs.filter((item) => item.id === id);
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-red-200 via-yellow-100 to-blue-200">
      <div className="px-10 py-5">
        {Job.map((item, index) => (
          <div key={index} className="flex flex-col">
            <div className="text-3xl font-extrabold">
              <span>Apply for&nbsp;</span>
              <span className="text-blue-800 underline">
              {item.title}
              </span>
              <span className="text-xl">
              &nbsp;at&nbsp;
                {item.companyName}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div></div>
    </div>
  );
};

export default page;
