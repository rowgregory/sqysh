import React from "react";
import { useHeaderContext } from "../contexts/headerContext";

const Burger = () => {
  const { setToggleNavigation, toggleNavigation } = useHeaderContext();
  return (
    <svg
      className={`block sm:hidden transition-transform fixed -top-2.5 -right-3 z-[3000] ${toggleNavigation ? "rotate-45" : ""
        }`}
      viewBox="0 0 100 100"
      width="80"
      onClick={() => setToggleNavigation(!toggleNavigation)}
    >
      <path
        style={{
          strokeDasharray: toggleNavigation ? "17 82" : "40 82",
          strokeDashoffset: toggleNavigation ? "-62px" : "",
        }}
        className="line fill-none stroke-white"
        d="m 70,33 h -40 c 0,0 -6,1.368796 -6,8.5 0,7.131204 6,8.5013 6,8.5013 l 20,-0.0013"
      />
      <path
        style={{
          strokeDasharray: "40 111",
          strokeDashoffset: toggleNavigation ? "23px" : "",
        }}
        className="line fill-none stroke-white"
        d="m 70,50 h -40"
      />
      <path
        style={{
          strokeDasharray: "40 161",
          strokeDashoffset: toggleNavigation ? "-83px" : "",
        }}
        className="line fill-none stroke-white"
        d="m 69.575405,67.073826 h -40 c -5.592752,0 -6.873604,-9.348582 1.371031,-9.348582 8.244634,0 19.053564,21.797129 19.053564,12.274756 l 0,-40"
      />
    </svg>
  );
};

export default Burger;
