import React from "react";
import ClientMarquee from "./ClientMarquee";

const TrustedByTopClients = () => {
  return (
    <div className="mt-28 mb-48">
      <p className="text-[#71789e] text-center text-xl my-8 font-bold">
        Trusted by top clients across the Northeastern United States
      </p>
      <ClientMarquee />
    </div>
  );
};

export default TrustedByTopClients;
