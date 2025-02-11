import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Navbar = () => {
  return (
    <div className="p-3 flex justify-between bg-gradient-to-br from-slate-950 via-yellow-950 to-black text-white ">
      <div className="text-2xl font-mono font-bold">Recruit</div>
      <div>
        <Select>
          <SelectTrigger className="w-fit px-4 py-1 rounded-3xl">
            <SelectValue placeholder="Get Hired" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Get Hired">Get Hired</SelectItem>
            <SelectItem value="Hire others">Hire others</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Navbar;
