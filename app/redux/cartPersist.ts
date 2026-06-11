import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { cartActions } from "./features/cartSlice";

export const cartPersist = createListenerMiddleware();

cartPersist.startListening({
  matcher: isAnyOf(
    cartActions.add,
    cartActions.setQty,
    cartActions.remove,
    cartActions.clear,
  ),
  effect: (_action, api) => {
    const { cart } = api.getState() as any;
    try {
      localStorage.setItem("sqysh-cart", JSON.stringify(cart.lines));
    } catch {}
  },
});
