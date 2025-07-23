import React, { FC, ReactNode } from "react";

export const metadata = {
  title: "Get a Quote | Sqysh",
  description:
    "Get in touch with Sqysh for a custom quote on your next project.",
  alternates: {
    canonical: "https://sqysh.io/quote",
  },
};

interface QuoteWrapperProps {
  children: ReactNode;
}

const QuoteWrapper: FC<QuoteWrapperProps> = ({ children }) => {
  return (
    <div className="max-w-screen-sm mx-auto w-full min-h-[calc(100vh-84px)] pt-8 md:pt-24 px-3">
      {children}
    </div>
  );
};

export default QuoteWrapper;
