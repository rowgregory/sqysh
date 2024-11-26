"use client";

import React, { Fragment, useState } from "react";
import createQuote from "../actions/createQuote";
import Image from "next/image";
import { Sqysh2 } from "@/public/images";
import useRequestAQuoteForm from "../hooks/useRequestAQuoteForm";
import RequestAQuoteForm from "../forms/RequestAQuoteForm";
import Typewriter from "../components/common/TypeWriter";

export const metadata = {
  title: "Get a Quote | Sqysh",
  description:
    "Get in touch with Sqysh for a custom quote on your next project.",
  alternates: {
    canonical: "/quote",
  },
};

const RequestAQuote = () => {
  const [successState, setSuccessState] = useState({ success: false, id: "" });
  const { inputs, handleInput, validateInputs, setErrors, errors } =
    useRequestAQuoteForm();
  const [loading, setLoading] = useState(false);

  const submit = async (e: any) => {
    e.preventDefault();
    const validationErrors = validateInputs();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      const response = await createQuote(inputs);
      setLoading(false);
      setSuccessState({ success: true, id: response.id });
      window.scrollTo(0, 0);
    } else {
      console.log("Validation failed", validationErrors);
      window.scrollTo({ behavior: "smooth", top: 250 });
    }
  };

  return (
    <div className="max-w-screen-sm w-full">
      {successState.success ? (
        <Fragment>
          <h1 className="text-3xl font-bold font-Raleway mb-8">
            Thank you for reaching out to{" "}
            <span className="font-Paytone-One">Sqysh!</span>
          </h1>
          <p className="mb-2">
            Quote reference id:
            <span className="font-bold">&nbsp;&nbsp;{successState.id}</span>
          </p>
          <Image src={Sqysh2} alt="Sqysh" width={300} />
          <div className="max-w-[490px] w-full">
            <Typewriter
              sentence={`Your quote request has been successfully submitted. I'll personally review it and get back to you shortly with your customized solution. Looking forward to assisting you further!`}
              speed={40}
              text=""
            />
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <h1 className="text-3xl font-bold font-Raleway mb-2.5">
            Get Your <span className="font-Paytone-One">Sqysh</span> Quote
          </h1>
          <h6 className="text-slate-500 tracking-widest">
            Start your journey with{" "}
            <span className="font-Paytone-One">Sqysh</span>, your reliable
            partner in finding the perfect solutions! Ready to give you a
            personalized quote that fits your needs,{" "}
            <span className="font-Paytone-One">Sqysh</span> is here to help you
            explore the best pricing and service options. Take the next step by
            filling out this form and let{" "}
            <span className="font-Paytone-One">Sqysh</span> guide you to the
            ideal solution!
          </h6>
          <RequestAQuoteForm
            errors={errors}
            inputs={inputs}
            handleInput={handleInput}
            submit={submit}
            loading={loading}
          />
        </Fragment>
      )}
    </div>
  );
};

export default RequestAQuote;
