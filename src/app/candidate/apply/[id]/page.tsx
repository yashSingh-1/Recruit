"use client";

import { Jobs, QuestionsRelatedTONewJob } from "@/lib/constants";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
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

const formSchema = z.object({
  candidateName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  resume: z.string(),
  coverLetter: z.string(),
  Age: z.string(),
  WhyDoYouWannaWorkHere: z.string(),
  UniqueThingsYouGot: z.string(),
  CGPA: z.string(),
  WillingTORelocate: z.string(),
  location: z.string(),
});

const page = () => {
  const [file, setFile] = useState(null);

  const pathname = usePathname();
  const id = pathname.split("/")[3];
  const Job = Jobs.filter((item) => item.id === id);

  const handleUpload = async () => {
    if (!file) return alert("Please select a file!");

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      alert("File uploaded successfully!");
    } else {
      alert("Upload failed!");
    }
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      candidateName: "",
      resume: "",
      coverLetter: "",
      Age: "",
      WhyDoYouWannaWorkHere: "",
      UniqueThingsYouGot: "",
      CGPA: "",
      WillingTORelocate: "",
      location: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-red-200 via-white to-blue-200">
      <div className="px-10 py-5">
        {Job.map((item, index) => (
          <div key={index} className="flex flex-col">
            <div className="text-3xl font-extrabold">
              <span>Apply for&nbsp;</span>
              <span className="text-blue-800 underline">{item.title}</span>
              <span className="text-xl">
                &nbsp;at&nbsp;
                {item.companyName}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-5">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 md:w-[600px] text-black"
          >
            <FormField
              control={form.control}
              name="candidateName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Joh Doe" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="resume"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Drive link to your Resume</FormLabel>
                  <FormControl>
                    <Input placeholder="Make sure it&apos;s publicaly viewable!" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-between gap-x-2">
              <FormField
                control={form.control}
                name="coverLetter"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Drive link to your Cover Letter</FormLabel>
                    <FormControl>
                      <Input placeholder="Cover Letter" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Age"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Your Age</FormLabel>
                    <FormControl>
                      <Input placeholder="Age" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="WhyDoYouWannaWorkHere"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Explain in short, why you wanna work here!</FormLabel>
                  <FormControl>
                    <Input placeholder="Reasons you got it!" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="UniqueThingsYouGot"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    What unique things could you bring to the table!
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Explain shortly" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="CGPA"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CGPA</FormLabel>
                  <FormControl>
                    <Input placeholder="Your current CGPA" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-between gap-x-2">
              <FormField
                control={form.control}
                name="WillingTORelocate"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Are you willing to relocate!</FormLabel>
                    <FormControl>
                      <Input placeholder="Yes or No" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Current Location</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Current Location" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              className="w-full bg-blue-600 hover:bg-blue-500 text-lg"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default page;
