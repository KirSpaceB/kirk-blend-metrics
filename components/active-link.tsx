"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface ActiveLinkProps extends React.ComponentPropsWithoutRef<typeof Link> {
  startsWith?: boolean;
  href: string;
}

export const ActiveLink = ({
  className,
  href,
  startsWith = false,
  ...props
}: ActiveLinkProps) => {
  const pathname = usePathname();
  const active = startsWith ? pathname.startsWith(href) : pathname === href;
  return (
    <Link
      className={cn(
        "flex h-10 cursor-pointer items-center gap-x-3 rounded-md px-3 py-2 text-sm font-semibold leading-6 text-gray-500 hover:bg-gray-100 focus-visible:outline-none",
        {
          "bg-primary-50 text-primary-500 hover:bg-primary-50": active,
        },
        className
      )}
      href={href}
      {...props}
    />
  );
};
