import React from "react";
import Inputfile from "./Inputfile";
import Linkresult from "./Linkresult";
import { useState } from "react";
import Scan from "./Qr";

const Shor = () => {
  const [inputValue, setInputValue] = useState("");
  const setUrl = (url) => {
    setInputValue(url);
  };
  return (
    <>
      <div className="container mx-auto h-screen  max-w-7xl font-poppins ">
        <div className=" bg-[#FAFDE7] h-screen  drop-shadow-2xl md:flex-row ">
          <section className="xs:p-10  w-full flex flex-col justify-center items-center  p-4 ">
            <div className="text-8xl font-serif font-bold">
              <span className=" text-[#ecf976] font-serif font-bold">
                {" "}
                Shorten{" "}
              </span>
              <span className="text-black"> your links </span>
            </div>
            <div className="flex flex-col justify-center items-center pt-10 gap-8 w-full">
              <div className="pb-10 w-full">
                <Inputfile setUrl={setUrl} />
              </div>

              <Linkresult inputValue={inputValue} />
              <Scan />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Shor;
