import React from "react";
import {
  faBuilding,
  faEnvelope,
  faMessage,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Spinner } from 'flowbite-react';

const RequestAQuoteForm = ({
  errors,
  inputs,
  handleInput,
  submit,
  loading,
}: {
  errors: any;
  inputs: any;
  handleInput: any;
  submit: any;
  loading: any;
}) => {
  return (
    <form className="mt-10">
      <div
        className={`flex items-center border-b ${errors.name ? "border-red-700" : "border-slate-700"
          } h-16 mb-8`}
      >
        <FontAwesomeIcon
          icon={faUser}
          className={`${errors.name ? "text-red-700" : ""} mr-3`}
        />
        <input
          name="name"
          value={inputs.name || ""}
          onChange={handleInput}
          placeholder="Name*"
          className="border-none bg-transparent focus:outline-none"
        />
      </div>
      <div
        className={`flex items-center border-b ${errors.companyName ? "border-red-700" : "border-slate-700"
          } h-16 mb-8`}
      >
        <FontAwesomeIcon
          icon={faBuilding}
          className={`${errors.companyName ? "text-red-700" : ""} mr-3`}
        />
        <input
          name="companyName"
          value={inputs.companyName || ""}
          onChange={handleInput}
          placeholder="Company Name*"
          className="border-none bg-transparent focus:outline-none"
        />
      </div>
      <div
        className={`flex items-center border-b ${errors.email ? "border-red-700" : "border-slate-700"
          } h-16 mb-8`}
      >
        <FontAwesomeIcon
          icon={faEnvelope}
          className={`${errors.email ? "text-red-700" : ""} mr-3`}
        />
        <input
          name="email"
          value={inputs.email || ""}
          onChange={handleInput}
          placeholder="Email*"
          className="border-none bg-transparent focus:outline-none"
        />
      </div>
      <div
        className={`flex items-center border-b ${errors.phone ? "border-red-700" : "border-slate-700"
          } h-16 mb-9`}
      >
        <FontAwesomeIcon
          icon={faPhone}
          className={`${errors.phone ? "text-red-700" : ""} mr-3`}
        />
        <input
          name="phone"
          value={inputs.phone || ""}
          onChange={handleInput}
          placeholder="Phone*"
          className="border-none bg-transparent focus:outline-none"
        />
      </div>
      <div
        className={`flex items-start border-b ${errors.message ? "border-red-700" : "border-slate-700"
          } mb-8`}
      >
        <FontAwesomeIcon
          icon={faMessage}
          className={`${errors.message ? "text-red-700" : ""} mt-3`}
        />
        <textarea
          rows={5}
          name="message"
          value={inputs.message || ""}
          onChange={handleInput}
          placeholder="Message*"
          className="border-none bg-transparent focus:outline-none w-full"
        />
      </div>
      <button
        disabled={loading}
        onClick={submit}
        className="btn-anim rounded-full bg-[linear-gradient(to_right,_#29323c,_#485563,_#2b5876,_#4e4376)] px-7 py-4 text-lg font-bold flex items-center"
      >
        {loading && (
          <span>
            <Spinner aria-label="Loading quote request" size="sm" className='mr-1' color='pink' />
          </span>
        )}{" "}
        SUBMIT{loading && "TING..."}
      </button>
    </form>
  );
};

export default RequestAQuoteForm;
