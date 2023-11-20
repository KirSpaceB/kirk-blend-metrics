import * as React from "react";
import { Combobox as ComboboxPrimitive, Transition } from "@headlessui/react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { labelVariants } from "./label";

const ComboboxLabel = ({
  className,
  size,
  ...props
}: React.ComponentPropsWithoutRef<typeof ComboboxPrimitive.Label> &
  VariantProps<typeof labelVariants>) => {
  return (
    <ComboboxPrimitive.Label
      className={cn(labelVariants({ className, size }))}
      {...props}
    />
  );
};

const Combobox = React.forwardRef<
  React.ElementRef<typeof ComboboxPrimitive>,
  React.ComponentPropsWithoutRef<typeof ComboboxPrimitive>
>(({ className, as = "div", ...props }, ref) => (
  <ComboboxPrimitive
    className={cn("relative w-[224px]", className)}
    as={as}
    {...props}
    ref={ref}
  />
));

Combobox.displayName = "Combobox";

const ComboboxTrigger = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div className={cn("relative", className)} {...props} ref={ref} />
));

ComboboxTrigger.displayName = "ComboboxTrigger";

export const comboboxInputVariants = cva("peer w-full rounded-[5px]", {
  variants: {
    visual: {
      default:
        "border border-gray-300 bg-white text-gray-black placeholder:text-gray-500 hover:border-primary-200 hover:ring-4 hover:ring-primary-50 focus:border-primary-500 focus:ring-4 focus:ring-primary-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-50 hover:disabled:border-gray-300 hover:disabled:ring-0",
      gray: "border-0 bg-gray-100 hover:bg-gray-200 text-gray-black placeholder:text-gray-500 focus:bg-white focus:border focus:ring-4 focus:ring-primary-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-50 hover:disabled:border-gray-300 hover:disabled:ring-0",
    },
    size: {
      sm: "h-9 py-2.5 pr-3 pl-[34px] text-sm",
      lg: "h-11 py-2.5 pr-3.5 pl-[42px] text-base",
    },
  },
  defaultVariants: {
    visual: "default",
    size: "sm",
  },
});

const ComboboxInput = React.forwardRef<
  React.ElementRef<typeof ComboboxPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof ComboboxPrimitive.Input> &
    VariantProps<typeof comboboxInputVariants>
>(({ className, visual, size, ...props }, ref) => (
  <ComboboxPrimitive.Input
    className={cn(comboboxInputVariants({ visual, size, className }))}
    {...props}
    ref={ref}
  />
));

ComboboxInput.displayName = "ComboboxInput";

export const comboboxButtonVariants = cva(
  "inline-flex justify-center items-center absolute inset-y-0 my-auto text-gray-400 peer-hover:text-gray-500 peer-focus:text-primary-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 focus-visible:outline-none",
  {
    variants: {
      align: {
        left: "",
        right: "",
      },
      size: {
        sm: "",
        lg: "",
      },
    },
    compoundVariants: [
      {
        align: "left",
        size: "sm",
        className: "left-2.5",
      },
      {
        align: "left",
        size: "lg",
        className: "left-3",
      },
      {
        align: "right",
        size: "sm",
        className: "right-2.5",
      },
      {
        align: "right",
        size: "lg",
        className: "right-3",
      },
    ],
    defaultVariants: {
      size: "sm",
      align: "left",
    },
  }
);

const ComboboxButton = React.forwardRef<
  React.ElementRef<typeof ComboboxPrimitive.Button>,
  React.ComponentPropsWithoutRef<typeof ComboboxPrimitive.Button> &
    VariantProps<typeof comboboxButtonVariants>
>(({ className, size, align, ...props }, ref) => (
  <ComboboxPrimitive.Button
    className={comboboxButtonVariants({ size, align, className })}
    {...props}
    ref={ref}
  />
));

ComboboxButton.displayName = "ComboboxButton";

const ComboboxOptions = React.forwardRef<
  React.ElementRef<typeof ComboboxPrimitive.Options>,
  React.ComponentPropsWithoutRef<typeof ComboboxPrimitive.Options>
>(({ className, ...props }, ref) => (
  <ComboboxPrimitive.Options
    className={cn(
      "absolute mt-1 w-full space-y-1 rounded-[5px] bg-white px-1 shadow-2xl",
      className
    )}
    {...props}
    ref={ref}
  />
));

ComboboxOptions.displayName = "ComboboxOptions";

const ComboboxOption = React.forwardRef<
  React.ElementRef<typeof ComboboxPrimitive.Option>,
  React.ComponentPropsWithoutRef<typeof ComboboxPrimitive.Option>
>(({ className, ...props }, ref) => (
  <ComboboxPrimitive.Option
    className={cn(
      "cursor-pointer bg-white px-3 py-2.5 text-[13px] font-medium leading-none text-gray-500 ui-active:bg-gray-50 ui-active:text-gray-900",
      className
    )}
    {...props}
    ref={ref}
  />
));

ComboboxOption.displayName = "ComboboxOption";

const ScaleOutIn = React.forwardRef<
  React.ElementRef<typeof Transition>,
  React.ComponentPropsWithoutRef<typeof Transition>
>((props, ref) => (
  <Transition
    as={React.Fragment}
    appear
    enter="transition ease-out"
    enterFrom="opacity-0 scale-95"
    enterTo="opacity-100 scale-100"
    leave="transition ease-in duration-75"
    leaveFrom="opacity-100 scale-100"
    leaveTo="opacity-0 scale-95"
    {...props}
    ref={ref}
  />
));

ScaleOutIn.displayName = "ScaleOutIn";

export {
  Combobox,
  ComboboxTrigger,
  ComboboxInput,
  ComboboxLabel,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  ScaleOutIn,
};
