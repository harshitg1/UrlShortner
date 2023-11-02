import { useEffect } from "react";
import { useState, React } from "react";

const Inputfile = ({ setUrl }) => {
  const [value, setValue] = useState("");

  return (
    <>
      <div className="flex justify-center items-center w-full ">
        <input
          type="text"
          className="p-5 placeholder-[#ecf976] bg-black h-10 text-white rounded-md w-1/2"
          placeholder="Enter your Link"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className="p-2 ml-4 border border-blue-400 rounded-lg"
          onClick={() => setUrl(value)}
        >
          Shorten
        </button>
      </div>
    </>
  );
};

export default Inputfile;
