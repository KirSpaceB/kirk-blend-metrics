import { cn } from "@/lib/utils";

export const Link2 = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-4w-4", className)}
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="16"
      viewBox="0 0 15 16"
      fill="none"
      {...props}
    >
      <path
        d="M7.94223 11.9768L7.05834 12.8607C5.83795 14.0811 3.85931 14.0811 2.63892 12.8607C1.41854 11.6403 1.41854 9.66164 2.63892 8.44125L3.52281 7.55737M11.4778 8.44125L12.3616 7.55737C13.582 6.33698 13.582 4.35834 12.3616 3.13795C11.1413 1.91756 9.16261 1.91756 7.94223 3.13795L7.05834 4.02183M5.31278 10.1868L9.68778 5.81179"
        stroke="#306CFE"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
