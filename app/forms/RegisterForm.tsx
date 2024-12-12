"use client";

import React, { FormEvent } from "react";
import useForm from "../hooks/useForm";

const RegisterForm = () => {
  const { handleInput, handleToggle, inputs } = useForm([
    "firstName",
    "lastName",
    "phoneNumber",
  ]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-y-4 w-full relative z-40"
    >
      <input
        name="firstName"
        onChange={handleInput}
        value={(inputs.firstName as string) || ""}
        className="bg-[#10142a] p-4 w-full border-[3px] border-[#2a2f50] focus:border-[#2a2f50] focus:outline-none"
        aria-label="Enter First Name"
        placeholder="Enter First Name"
      />
      <input
        name="lastName"
        onChange={handleInput}
        value={(inputs.lastName as string) || ""}
        className="bg-[#10142a] p-4 w-full border-[3px] border-[#2a2f50] focus:border-[#2a2f50] focus:outline-none"
        aria-label="Enter Last Name"
        placeholder="Enter Last Name"
      />
      <input
        name="phoneNumber"
        onChange={handleInput}
        value={(inputs.phoneNumber as string) || ""}
        className="bg-[#10142a] p-4 w-full border-[3px] border-[#2a2f50] focus:border-[#2a2f50] focus:outline-none"
        aria-label="Enter Phone Number"
        placeholder="Enter Phone Number"
      />
      <div className="flex justify-start items-center my-6 gap-x-3">
        <input
          type="checkbox"
          name="consentToSMS"
          onChange={handleToggle}
          className=""
        />
        <label htmlFor="consentToSMS" className="text-[#8a91b8] text-sm">
          By checking this box, you agree to receive text messages from Sqysh.
          Reply STOP to opt out; Reply HELP for help. Message frequency varies.
          Message and data rates may apply.
        </label>
      </div>
      <button
        type="submit"
        className="p-4 border-[3px] border-[#2a2f50] bg-[#2a2f50] w-full h-full text-white"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
