import { cn } from "@/lib/utils";
import React from "react";

export const Tag = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-[18px] w-[18px]", className)}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.625 5.625H5.6325M15.8175 10.4325L10.44 15.81C10.3007 15.9495 10.1353 16.0601 9.95316 16.1356C9.77106 16.2111 9.57587 16.2499 9.37875 16.2499C9.18163 16.2499 8.98644 16.2111 8.80434 16.1356C8.62224 16.0601 8.45681 15.9495 8.3175 15.81L1.875 9.375V1.875H9.375L15.8175 8.3175C16.0969 8.59854 16.2537 8.97872 16.2537 9.375C16.2537 9.77128 16.0969 10.1515 15.8175 10.4325Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
