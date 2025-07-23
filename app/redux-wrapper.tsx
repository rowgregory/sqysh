"use client";

import React, { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import PageWrapper from "./page-wrapper";
import { store } from "./redux/store";

const ReduxWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Provider store={store}>
      <PageWrapper>{children}</PageWrapper>
    </Provider>
  );
};

export default ReduxWrapper;
