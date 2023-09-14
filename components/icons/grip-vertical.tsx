import { cn } from "@/lib/utils";

export const GripVertical = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-3 w-[13px]", className)}
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity="0.6">
        <path
          d="M4.98888 2.19048C4.98888 2.42593 4.9167 2.6561 4.78146 2.85187C4.64622 3.04764 4.454 3.20023 4.22911 3.29033C4.00421 3.38044 3.75675 3.40401 3.518 3.35808C3.27926 3.31214 3.05995 3.19876 2.88783 3.03227C2.7157 2.86578 2.59848 2.65366 2.55099 2.42273C2.5035 2.1918 2.52788 1.95243 2.62103 1.7349C2.71419 1.51737 2.87194 1.33144 3.07433 1.20063C3.27673 1.06982 3.51469 1 3.75811 1C4.08453 1 4.39758 1.12543 4.6284 1.34868C4.85921 1.57194 4.98888 1.87474 4.98888 2.19048ZM9.29657 3.38095C9.54 3.38095 9.77796 3.31113 9.98035 3.18032C10.1828 3.04951 10.3405 2.86358 10.4337 2.64605C10.5268 2.42852 10.5512 2.18916 10.5037 1.95823C10.4562 1.7273 10.339 1.51517 10.1669 1.34868C9.99473 1.18219 9.77543 1.06881 9.53669 1.02288C9.29794 0.97694 9.05047 1.00052 8.82558 1.09062C8.60069 1.18072 8.40847 1.33331 8.27323 1.52908C8.13799 1.72486 8.06581 1.95502 8.06581 2.19048C8.06581 2.50621 8.19548 2.80901 8.42629 3.03227C8.6571 3.25553 8.97015 3.38095 9.29657 3.38095ZM3.75811 4.80952C3.51469 4.80952 3.27673 4.87934 3.07433 5.01016C2.87194 5.14097 2.71419 5.32689 2.62103 5.54442C2.52788 5.76196 2.5035 6.00132 2.55099 6.23225C2.59848 6.46318 2.7157 6.6753 2.88783 6.84179C3.05995 7.00828 3.27926 7.12167 3.518 7.1676C3.75675 7.21354 4.00421 7.18996 4.22911 7.09986C4.454 7.00975 4.64622 6.85717 4.78146 6.66139C4.9167 6.46562 4.98888 6.23545 4.98888 6C4.98888 5.68427 4.85921 5.38146 4.6284 5.15821C4.39758 4.93495 4.08453 4.80952 3.75811 4.80952ZM9.29657 4.80952C9.05315 4.80952 8.81519 4.87934 8.61279 5.01016C8.4104 5.14097 8.25265 5.32689 8.15949 5.54442C8.06634 5.76196 8.04196 6.00132 8.08945 6.23225C8.13694 6.46318 8.25416 6.6753 8.42629 6.84179C8.59842 7.00828 8.81772 7.12167 9.05646 7.1676C9.29521 7.21354 9.54268 7.18996 9.76757 7.09986C9.99246 7.00975 10.1847 6.85717 10.3199 6.66139C10.4552 6.46562 10.5273 6.23545 10.5273 6C10.5273 5.68427 10.3977 5.38146 10.1669 5.15821C9.93605 4.93495 9.62299 4.80952 9.29657 4.80952ZM3.75811 8.61905C3.51469 8.61905 3.27673 8.68887 3.07433 8.81968C2.87194 8.95049 2.71419 9.13642 2.62103 9.35395C2.52788 9.57148 2.5035 9.81084 2.55099 10.0418C2.59848 10.2727 2.7157 10.4848 2.88783 10.6513C3.05995 10.8178 3.27926 10.9312 3.518 10.9771C3.75675 11.0231 4.00421 10.9995 4.22911 10.9094C4.454 10.8193 4.64622 10.6667 4.78146 10.4709C4.9167 10.2751 4.98888 10.045 4.98888 9.80952C4.98888 9.49379 4.85921 9.19099 4.6284 8.96773C4.39758 8.74447 4.08453 8.61905 3.75811 8.61905ZM9.29657 8.61905C9.05315 8.61905 8.81519 8.68887 8.61279 8.81968C8.4104 8.95049 8.25265 9.13642 8.15949 9.35395C8.06634 9.57148 8.04196 9.81084 8.08945 10.0418C8.13694 10.2727 8.25416 10.4848 8.42629 10.6513C8.59842 10.8178 8.81772 10.9312 9.05646 10.9771C9.29521 11.0231 9.54268 10.9995 9.76757 10.9094C9.99246 10.8193 10.1847 10.6667 10.3199 10.4709C10.4552 10.2751 10.5273 10.045 10.5273 9.80952C10.5273 9.49379 10.3977 9.19099 10.1669 8.96773C9.93605 8.74447 9.62299 8.61905 9.29657 8.61905Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};
