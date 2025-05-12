import { Link } from "react-router-dom";
import { Input } from "./ui/input";
import { BsSearch } from "react-icons/bs";

const HeroSection = () => {
  return (
    <>
      <main className="container mx-auto flex flex-col items-center justify-center my-9 pb-8">
        <div className="flex mt-10 w-full max-w-[700px] px-3">
          <div className="bg-blue-600 text-white text-[26px] rounded-tl-sm rounded-bl-sm grid place-items-center px-4">
            <BsSearch />
          </div>
          <Input
            type="text"
            placeholder="Search for a product..."
            className="border-2 border-blue-600 px-6 py-7 w-full dark:text-white dark:bg-slate-800"
          />
        </div>
      </main>
    </>
  );
};

export default HeroSection;
