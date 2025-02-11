"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { useState } from "react";


const Navbar = () => {
    const [hire, setHire] = useState<boolean>(false);
  return (
    <div className="p-3 flex justify-between bg-gradient-to-br from-slate-950 via-yellow-950 to-black text-white ">
      <div className="text-2xl font-mono font-bold">Recruit</div>
      {/* <div>
        <Select>
          <SelectTrigger className="w-fit px-4 py-1 rounded-3xl font-bold font-mono bg-white text-black uppercase">
            <SelectValue placeholder="Hire others" />
          </SelectTrigger>
          <SelectContent className="rounded-3xl">
            <Link href="#hire_others" scroll>
            <SelectItem value="Hire others">Hire others</SelectItem>
            </Link>
            <Link href="#get_hired"> 
            <SelectItem value="Get Hired">Get Hired</SelectItem>
            </Link>
          </SelectContent>
        </Select>
      </div> */}
    </div>
  );
};

export default Navbar;
