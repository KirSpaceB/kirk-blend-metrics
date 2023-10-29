import { cn } from "@/lib/utils";

export const SettingsAccountPersonalInfoCameraIcon = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-[18px] w-[18px]", className)}
      viewBox="0 0 50 50"
      fill="none"
      {...props}
    >
      <path
        d="M47.9163 39.5833C47.9163 40.6884 47.4774 41.7482 46.696 42.5296C45.9146 43.311 44.8547 43.75 43.7497 43.75H6.24967C5.14461 43.75 4.0848 43.311 3.3034 42.5296C2.52199 41.7482 2.08301 40.6884 2.08301 39.5833V16.6667C2.08301 15.5616 2.52199 14.5018 3.3034 13.7204C4.0848 12.939 5.14461 12.5 6.24967 12.5H14.583L18.7497 6.25H31.2497L35.4163 12.5H43.7497C44.8547 12.5 45.9146 12.939 46.696 13.7204C47.4774 14.5018 47.9163 15.5616 47.9163 16.6667V39.5833Z"
        stroke="#667085"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M24.9997 35.4167C29.602 35.4167 33.333 31.6857 33.333 27.0833C33.333 22.481 29.602 18.75 24.9997 18.75C20.3973 18.75 16.6663 22.481 16.6663 27.0833C16.6663 31.6857 20.3973 35.4167 24.9997 35.4167Z"
        stroke="#667085"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
