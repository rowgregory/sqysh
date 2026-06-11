import { Suspense } from "react";
import { SuccessClient } from "./SuccessClient";

export const metadata = {
  title: "Order confirmed — Sqysh",
};

export default function SuccessPage() {
  return (
    <Suspense fallback={null}>
      <SuccessClient />
    </Suspense>
  );
}
