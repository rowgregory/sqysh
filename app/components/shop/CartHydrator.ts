"use client";

import { cartActions } from "@/app/redux/features/cartSlice";
import { useAppDispatch } from "@/app/redux/store";
import { useEffect } from "react";

export function CartHydrator() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    try {
      const raw = localStorage.getItem("sqysh-cart");
      if (raw) dispatch(cartActions.hydrate(JSON.parse(raw)));
    } catch {}
  }, [dispatch]);
  return null;
}
