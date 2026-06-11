import Link from "next/link";
import Picture from "./common/Picture";
import CartButton from "./CartButton";

export function SlimNav({ go }: { go?: any }) {
  return (
    <nav className="flex items-center justify-between px-5 py-4 shrink-0">
      {go ? (
        <button
          onClick={() => go("home")}
          className="flex items-center bg-transparent border-none cursor-pointer"
          aria-label="Sqysh home"
        >
          <Picture
            src="/images/sqysh-logo-text-white.png"
            alt="Sqysh"
            className="h-5 w-auto"
          />
        </button>
      ) : (
        <Link
          href="/"
          className="flex items-center bg-transparent border-none cursor-pointer"
          aria-label="Sqysh home"
        >
          <Picture
            src="/images/sqysh-logo-text-white.png"
            alt="Sqysh"
            className="h-5 w-auto"
          />
        </Link>
      )}
      <CartButton />
    </nav>
  );
}
