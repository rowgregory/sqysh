import React, { FC, ReactNode } from "react";

export const metadata = {
  title: "Get a Quote | Sqysh",
  description:
    "Get in touch with Sqysh for a custom quote on your next project.",
  alternates: {
    canonical: "/quote",
  },
};

interface QuoteWrapperProps {
  children: ReactNode;
}

const QuoteWrapper: FC<QuoteWrapperProps> = ({ children }) => {
  return <div className="max-w-screen-sm w-full">{children}</div>;
};

export default QuoteWrapper;
