import React from "react";

import { cn } from "@/lib/utils";

export const Slack = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-8 w-8", className)}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M26.5002 14.9998C27.8808 14.9998 29 13.8806 29 12.5C29 11.1194 27.8807 10.0002 26.5001 10.0002C25.1194 10.0002 24 11.1195 24 12.5002V14.9998H26.5002ZM19.5 14.9998C20.8807 14.9998 22 13.8805 22 12.4998V5.50024C22 4.11953 20.8807 3.00024 19.5 3.00024C18.1193 3.00024 17 4.11953 17 5.50024V12.4998C17 13.8805 18.1193 14.9998 19.5 14.9998Z"
        fill="#2EB67D"
      />
      <path
        d="M5.49979 17.0002C4.11919 17.0002 3 18.1194 3 19.5C3 20.8806 4.1193 21.9998 5.49989 21.9998C6.8806 21.9998 8 20.8805 8 19.4998V17.0002H5.49979ZM12.5 17.0002C11.1193 17.0002 10 18.1195 10 19.5002V26.4998C10 27.8805 11.1193 28.9998 12.5 28.9998C13.8807 28.9998 15 27.8805 15 26.4998V19.5002C15 18.1195 13.8807 17.0002 12.5 17.0002Z"
        fill="#E01E5A"
      />
      <path
        d="M17.0004 26.5002C17.0004 27.8808 18.1196 29 19.5002 29C20.8808 29 22 27.8807 22 26.5001C22 25.1194 20.8807 24 19.5 24L17.0004 24L17.0004 26.5002ZM17.0004 19.5C17.0004 20.8807 18.1197 22 19.5004 22L26.5 22C27.8807 22 29 20.8807 29 19.5C29 18.1193 27.8807 17 26.5 17L19.5004 17C18.1197 17 17.0004 18.1193 17.0004 19.5Z"
        fill="#ECB22E"
      />
      <path
        d="M14.9996 5.49979C14.9996 4.11919 13.8804 3 12.4998 3C11.1192 3 10 4.1193 10 5.49989C10 6.88061 11.1193 8 12.5 8L14.9996 8L14.9996 5.49979ZM14.9996 12.5C14.9996 11.1193 13.8803 10 12.4996 10L5.5 10C4.11929 10 3 11.1193 3 12.5C3 13.8807 4.11929 15 5.5 15L12.4996 15C13.8803 15 14.9996 13.8807 14.9996 12.5Z"
        fill="#36C5F0"
      />
    </svg>
  );
};
