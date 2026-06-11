"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import { ShoppingBag } from "lucide-react";
import { selectCount } from "../redux/features/cartSlice";
import { useMounted } from "../lib/hooks/useMounted";

export default function CartButton() {
  const count = useSelector(selectCount);

  const mounted = useMounted();

  const display = mounted ? (count > 99 ? "99+" : count) : 0;
  const label =
    mounted && count > 0
      ? `Cart, ${count} item${count === 1 ? "" : "s"}`
      : "Cart, empty";

  return (
    <Link
      href="/shop/cart"
      aria-label={label}
      className="group flex items-center gap-2 bg-transparent border-none cursor-pointer text-sqysh-muted hover:text-sqysh-chartreuse transition-colors duration-150"
    >
      <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
      <span className="font-mono text-xs tracking-tight">
        cart
        <span className="text-sqysh-chartreuse"> [{display}]</span>
      </span>
    </Link>
  );
}
