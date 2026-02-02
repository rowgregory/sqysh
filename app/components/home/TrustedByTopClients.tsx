import React from "react";
import ClientMarquee from "./ClientMarquee";

const TrustedByTopClients = () => {
  return (
    <div className="mb-48">
      <p className="text-zinc-300 text-center text-xl my-8 font-bold">
        Trusted by top clients across the Northeastern United States
      </p>
      <ClientMarquee />
    </div>
  );
};

export default TrustedByTopClients;
