import { cn } from "@/lib/utils";

export const MyGoals = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-4 w-4", className)}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      {...props}
    >
      <path
        d="M12 10.0308C14.6489 10.5516 16.5 11.741 16.5 13.125C16.5 14.989 13.1421 16.5 9 16.5C4.85786 16.5 1.5 14.989 1.5 13.125C1.5 11.741 3.35114 10.5516 6 10.0308M9 12.75V2.25L12.9883 4.70433C13.2792 4.88336 13.4247 4.97287 13.4711 5.08564C13.5115 5.184 13.5083 5.29492 13.4623 5.39079C13.4094 5.50069 13.2591 5.58167 12.9583 5.74361L9 7.875"
        stroke="#98A2B3"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
