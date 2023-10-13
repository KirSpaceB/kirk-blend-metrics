import { cn } from "@/lib/utils";

export const Refresh = ({
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
      <path
        d="M12.75 14.1559C14.341 12.9968 15.375 11.1191 15.375 8.99995C15.375 5.47914 12.5208 2.62495 9 2.62495H8.625M9 15.375C5.47919 15.375 2.625 12.5208 2.625 8.99995C2.625 6.8808 3.659 5.00315 5.25 3.844M8.25 16.8L9.75 15.3L8.25 13.8M9.75 4.19995L8.25 2.69995L9.75 1.19995"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
