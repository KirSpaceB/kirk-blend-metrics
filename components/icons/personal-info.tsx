import { cn } from "@/lib/utils";

export const PersonalInfo = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className={cn("h-4 w-4", className)}
      {...props}
    >
      <path
        d="M15.0002 15.75V14.25C15.0002 13.4544 14.6842 12.6913 14.1216 12.1287C13.559 11.5661 12.7959 11.25 12.0002 11.25H6.00024C5.20459 11.25 4.44153 11.5661 3.87892 12.1287C3.31631 12.6913 3.00024 13.4544 3.00024 14.25V15.75M12.0002 5.25C12.0002 6.90685 10.6571 8.25 9.00024 8.25C7.34339 8.25 6.00024 6.90685 6.00024 5.25C6.00024 3.59315 7.34339 2.25 9.00024 2.25C10.6571 2.25 12.0002 3.59315 12.0002 5.25Z"
        stroke="#306CFE"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
