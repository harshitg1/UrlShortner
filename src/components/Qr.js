import React, { useState } from "react";
import QRcode from "react-qr-code";

const Scan=() => {
  const [data, setData] = useState("");

  return (
    <div>
      <h1>QRCode</h1>
      <QRcode value={data} />
      <div className=" mt-8">
        <input
          value={data}
          placeholder="Generate Qr"
          className=" pl-4 h-10 text-white rounded-md w-full bg-black text-white"
          onChange={(e) => {
            setData(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Scan;
