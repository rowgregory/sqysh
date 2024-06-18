"use client";

import { faBuilding, faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from "react";

const useRequestAQuoteForm = () => {
  const [inputs, setInputs] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInput = (e: any) => {
    const { value, name } = e.target;

    setInputs((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  return { inputs, handleInput };
};

const submit = () => {

}

const RequestAQuote = () => {
  const { inputs, handleInput } = useRequestAQuoteForm();
  return (
    <div className='my-24'>
      <h1 className='text-2xl font-bold font-Raleway'>Get Your Sqysh Quote</h1>
      <form className='max-w-screen-sm mt-10'>
        <div className="flex items-center border-b border-slate-700 h-16 mb-8">
          <FontAwesomeIcon icon={faUser} className='mr-3' />
          <input
            name="name"
            value={inputs.name || ""}
            onChange={handleInput}
            placeholder="Name*"
            className='border-none bg-transparent focus:outline-none'
          />
        </div>
        <div className="flex items-center border-b border-slate-700 h-16 mb-8">
          <FontAwesomeIcon icon={faBuilding} className='mr-3' />
          <input
            name="companyName"
            value={inputs.companyName || ""}
            onChange={handleInput}
            placeholder="Company Name*"
            className='border-none bg-transparent focus:outline-none'
          />
        </div>
        <div className="flex items-center border-b border-slate-700 h-16 mb-8">
          <FontAwesomeIcon icon={faEnvelope} className='mr-3' />
          <input
            name="email"
            value={inputs.email || ""}
            onChange={handleInput}
            placeholder="Email*"
            className='border-none bg-transparent focus:outline-none'
          />
        </div>
        <div className="flex items-center border-b border-slate-700 h-16 mb-8">
          <FontAwesomeIcon icon={faPhone} className='mr-3' />
          <input
            name="phone"
            value={inputs.phone || ""}
            onChange={handleInput}
            placeholder="Phone*"
            className='border-none bg-transparent focus:outline-none'
          />
        </div>
        <button onClick={submit} className='px-7 py-4 border-[1px] border-[#3a6ef2] hover:bg-[#3a6ef2] duration-200 text-lg font-bold'>SUBMIT</button>
      </form>
    </div>
  );
};

export default RequestAQuote;
