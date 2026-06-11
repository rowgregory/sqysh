import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { LoginClient } from "./LoginClient";

export const metadata = { title: "Login — Sqysh" };

export default async function LoginPage() {
  const session = await auth();

  // already authorized → straight to dashboard
  if (session?.user?.role === "SUPER_USER") redirect("/dashboard");

  // signed in but not authorized → pending state
  if (session?.user) {
    return <LoginClient pendingEmail={session.user.email ?? ""} />;
  }

  // not signed in → normal login
  return <LoginClient />;
}
