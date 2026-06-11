"use server";
import { auth } from "@/auth";
import { fulfillOrder } from "./fulfillOrder";
import { revalidatePath } from "next/cache";

export async function retryFulfillment(
  stripeSessionId: string,
): Promise<{ success: boolean; error?: string }> {
  const session = await auth();
  if (session?.user?.role !== "SUPER_USER") {
    return { success: false, error: "Not authorized." };
  }
  const result = await fulfillOrder(stripeSessionId);
  if (result.success) revalidatePath("/dashboard");
  return result;
}
