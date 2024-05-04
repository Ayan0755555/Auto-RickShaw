import React from "react";
import CardShow from "./CardShow";
import AutoSection from "./AutoSection";

const AutoPage = () => {
  return (
    <>
      <div className="text-end mt-4 ">
        <button
          type="button"
          className="px-2 py-2 min-w-[140px] shadow-lg shadow-blue-200 rounded text-black text-sm tracking-wider font-medium outline-none border-2 border-purple-600 active:shadow-inner"
        >
          <a href="/addnewauto"> JOIN As a AutoOwner/Driver</a>
        </button>
      </div>
      <AutoSection />
      <CardShow />
    </>
  );
};

export default AutoPage;
