import { cn } from "@/lib/utils";

export const CompanyInfo = ({
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
        d="M2.24976 15.7499H15.7498M4.49976 13.4999V7.49992M7.49976 13.4999V7.49992M10.4998 13.4999V7.49992M13.4998 13.4999V7.49992M14.9998 5.24992L9.31776 1.69867C9.20239 1.62657 9.14471 1.59052 9.08285 1.57646C9.02815 1.56403 8.97136 1.56403 8.91666 1.57646C8.8548 1.59052 8.79712 1.62657 8.68176 1.69867L2.99976 5.24992H14.9998Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
