import { cn } from "@/lib/utils";

export const Globe = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-4 w-4", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
      fill="none"
      {...props}
    >
      <g clip-path="url(#clip0_26_522)">
        <path
          d="M16.5005 8.99976C16.5005 13.1419 13.1426 16.4998 9.00049 16.4998M16.5005 8.99976C16.5005 4.85762 13.1426 1.49976 9.00049 1.49976M16.5005 8.99976H1.50049M9.00049 16.4998C4.85835 16.4998 1.50049 13.1419 1.50049 8.99976M9.00049 16.4998C10.8764 14.446 11.9426 11.7807 12.0005 8.99976C11.9426 6.21878 10.8764 3.55352 9.00049 1.49976M9.00049 16.4998C7.12453 14.446 6.05842 11.7807 6.00049 8.99976C6.05842 6.21878 7.12453 3.55352 9.00049 1.49976M1.50049 8.99976C1.50049 4.85762 4.85835 1.49976 9.00049 1.49976"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_26_522">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
