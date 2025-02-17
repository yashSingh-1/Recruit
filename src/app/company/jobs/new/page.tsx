"use client";

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
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CreateJob } from "@/server/PrismaServerActions";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  hook: z.string(),
  companyName: z.string(),
  salary: z.string(),
  jobDescription: z.string(),
  whatYoulldo: z.string(),
  qualificationsNeeded: z.string(),
  tag: z.string(),
  location: z.string(),
});

const Page = () => {
  const [userIdState, setUserStateID] = useState("");
  const router = useRouter();

  const generateUniqueId = () => {
      return "user-" + Math.random().toString(36).substring(2, 9);
    };
  
    function getUserId() {
      let userId = localStorage.getItem("userId");
      if (!userId) {
        userId = generateUniqueId();
        localStorage.setItem("userId", userId);
        setUserStateID(userId);
      }
      setUserStateID(userId);
      return userId;
    }

    useEffect(() => {
      getUserId();
    }, []);


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      hook: "",
      companyName: "",
      salary: "",
      jobDescription: "",
      whatYoulldo: "",
      qualificationsNeeded: "",
      tag: "",
      location: "",
    },
  });
  console.log("USerID", userIdState.toString())

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const createdJob = await CreateJob({
        userId: userIdState,
        jobTitle: values.title,
        jobHook: values.hook,
        CompanyName: values.companyName,
        Salary: values.salary,
        description: values.jobDescription,
        whatHasToBeDone: values.whatYoulldo,
        qualifications: values.qualificationsNeeded,
        Tags: values.tag,
        location: values.location
      }


    )
    if(createdJob){
      router.replace("/company/jobs");
    }
    console.log("Created job", createdJob);
  }

  return (
    <div className="bg-gradient-to-r from-slate-950 via-gray-900 to-black px-5 min-h-screen flex flex-col justify-center items-center">
      <div className="text-white font-bold text-3xl">Create a new Job</div>
      
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 md:w-[600px] text-white"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Title</FormLabel>
                <FormControl>
                  <Input placeholder="Title" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="hook"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hook</FormLabel>
                <FormControl>
                  <Input placeholder="Job Hook" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-between gap-x-2">
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input placeholder="Compnay Name" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="salary"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Salary</FormLabel>
                <FormControl>
                  <Input placeholder="Salary" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          </div>
          <FormField
            control={form.control}
            name="jobDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Description</FormLabel>
                <FormControl>
                  <Input placeholder="Job Description" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="whatYoulldo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  What recruited Candidate will primarily do
                </FormLabel>
                <FormControl>
                  <Input placeholder="What has to be done!" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="qualificationsNeeded"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Qualifications needed</FormLabel>
                <FormControl>
                  <Input placeholder="Qualifications needed" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-between gap-x-2">
          <FormField
            control={form.control}
            name="tag"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Tag</FormLabel>
                <FormControl>
                  <Input placeholder="Tag" {...field} />
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
                <FormLabel>Job Location</FormLabel>
                <FormControl>
                  <Input placeholder="Job Location" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          </div>
          <Button className="w-full bg-blue-600 hover:bg-blue-500 text-lg" type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default Page;
