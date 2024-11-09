import React from "react";
import Picture from "./components/common/Picture";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const NotFound = () => {
  return (
    <div className="px-3">
      <div className="max-w-screen-xl w-full mx-auto flex flex-col items-center justify-center">
        <Picture
          src="/images/sqysh-404.png"
          alt="Sqysh"
          className="w-full max-w-screen-sm h-full"
          priority={false}
        />
        <Link href="/" className="text-white mt-20 flex items-center gap-2">
          <FontAwesomeIcon icon={faHome} /> Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
