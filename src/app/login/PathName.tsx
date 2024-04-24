"use client";

import { usePathname } from "next/navigation";

// This a client component, still prerendered
export function Pathname({ children }: any) {
  const pathname = usePathname();
  return <>{!pathname.includes("CreateAccount") && { children }}</>;
}
