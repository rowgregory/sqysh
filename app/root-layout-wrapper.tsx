"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { CartHydrator } from "./components/shop/CartHydrator";

export default function RootLayoutWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Provider store={store}>
      <CartHydrator />
      {children}
    </Provider>
  );
}
