import { cn } from "@/lib/utils";
import { ClassificationTypeNames } from "typescript";

export const RichText = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-5 w-5", className)}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.3333 8.33333H2.5M16.6667 5H2.5M16.6667 11.6667H2.5M13.3333 15H2.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
