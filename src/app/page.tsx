"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [userIdState, setUserStateID] = useState("");
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
  }, [userIdState]);

  console.log(userIdState);
  return (
    <div>
      <div
        className="bg-gray-950 h-screen text-white flex flex-col justify-between"
        id="hire_others"
      >
        <div className="grid grid-cols-2 h-[350px] ">
          <div className="flex justify-center items-center p-4">
            <span className="uppercase font-bold font-mono text-6xl">
              The magic devs
              <br />
              <span className="lowercase">
                you&apos;ve been
                <br />
                searching for!
              </span>
            </span>
          </div>
          <div className="flex flex-col justify-center items-start p-4 gap-y-4">
            <span className="text-2xl">
              Why waste so much time finding a average <br />
              developer when you can find <br />
              an awesome one
            </span>
            <div className="flex items-center">
              <Link href={"/company/jobs"}>
                <Button className="uppercase rounded-3xl bg-white hover:bg-slate-300 text-black text-xl font-mono">
                  Hire your Developer
                </Button>
              </Link>
              <span className="text0xl px-4">or</span>
              <Link href={"/candidate/jobs"}>
                <Button className="uppercase rounded-3xl bg-white hover:bg-slate-300 text-black text-xl font-mono">
                  Get Hired
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 mt-5 h-[500px] overflow-hidden">
          <div>
            <img
              src="https://images.pexels.com/photos/2379429/pexels-photo-2379429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="man"
              className="w-[300px] h-[500px] rounded-t-full"
            />
          </div>
          <div className="mt-[100px]">
            <img
              src="https://images.pexels.com/photos/718978/pexels-photo-718978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="man"
              className="w-[300px] h-[500px] rounded-t-full overflow-y-auto"
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="man"
              className="w-[300px] h-[500px] rounded-t-full"
            />
          </div>
          <div className="mt-[100px]">
            <img
              src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="man"
              className="w-[300px] h-[500px] rounded-t-full"
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="man"
              className="w-[300px] h-[500px] rounded-t-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
