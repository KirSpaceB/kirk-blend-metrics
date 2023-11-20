"use client";

import * as React from "react";
import { Check, ChevronDown } from "lucide-react";
import { Listbox as ListboxPrimitive, Transition } from "@headlessui/react";

import { cn, isString } from "@/lib/utils";
import { useControllableState } from "@/lib/hooks";
import { labelVariants } from "./label";
import { VariantProps } from "class-variance-authority";

interface ListboxProps<T>
  extends Omit<
    Omit<React.ComponentPropsWithoutRef<typeof ListboxPrimitive>, "value">,
    "onChange"
  > {
  value?: T;
  onChange?: (value: T) => void;
}

export const Listbox = <T,>({
  className,
  as = "div",
  value,
  onChange,
  ...props
}: ListboxProps<T>) => {
  const [selected, setSelected] = useControllableState<T>({
    value,
    onChange,
  });

  return (
    <ListboxPrimitive
      className={cn("relative w-full", className)}
      as={as}
      value={selected}
      onChange={setSelected}
      {...props}
    />
  );
};

export const ListboxLabel = ({
  className,
  size,
  ...props
}: React.ComponentPropsWithoutRef<typeof ListboxPrimitive.Label> &
  VariantProps<typeof labelVariants>) => {
  return (
    <ListboxPrimitive.Label
      className={cn(labelVariants({ className, size }))}
      {...props}
    />
  );
};

export const ListboxContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("relative", className)} {...props} />
));

ListboxContent.displayName = "ListboxContent";

interface ListboxButtonProps<T = any>
  extends Omit<
    React.ComponentPropsWithoutRef<typeof ListboxPrimitive.Button>,
    "children"
  > {
  children?: ({
    value,
    disabled,
    open,
  }: {
    value: T;
    disabled: boolean;
    open: boolean;
  }) => React.ReactNode;
  iconClassName?: string;
  placeholder?: string;
  isInvalid?: boolean;
}

export const ListboxButton = ({
  className,
  placeholder,
  iconClassName,
  children,
  isInvalid,
  ...props
}: ListboxButtonProps) => {
  return (
    <ListboxPrimitive.Button
      className={cn(
        "flex h-11 w-full items-center gap-x-2 rounded-[5px] border border-gray-300 bg-white px-3.5 py-2.5 text-base text-gray-black shadow-xs focus:border-primary-500 focus:ring-4 focus:ring-primary-50 focus-visible:outline-none",
        {
          "border-error-300 focus:border-error-300 focus:ring-error-100":
            isInvalid,
        },
        className
      )}
      {...props}
    >
      {({ value, disabled, open }) => (
        <>
          {value
            ? children
              ? children?.({ disabled, open, value })
              : isString(value) && value
            : placeholder && (
                <span className="text-gray-500">{placeholder}</span>
              )}
          <ChevronDown
            className={cn(
              "ml-auto h-5 w-5 flex-none text-gray-500",
              iconClassName
            )}
          />
        </>
      )}
    </ListboxPrimitive.Button>
  );
};

export const ListboxOptions = React.forwardRef<
  React.ElementRef<typeof ListboxPrimitive.Options>,
  React.ComponentPropsWithoutRef<typeof ListboxPrimitive.Options>
>(({ className, ...props }, ref) => (
  <Transition
    as={React.Fragment}
    leave="transition ease-in duration-100"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    <ListboxPrimitive.Options
      ref={ref}
      className={cn(
        "absolute z-10 mt-1 h-[206px] w-full space-y-1 overflow-y-auto rounded-md bg-white py-1 text-base shadow-lg scrollbar-thin scrollbar-track-gray-200 scrollbar-track-rounded-lg focus:outline-none sm:text-sm",
        className
      )}
      {...props}
    />
  </Transition>
));

ListboxOptions.displayName = "ListboxOptions";

interface ListboxOption<T>
  extends Omit<
    Omit<
      React.ComponentPropsWithoutRef<typeof ListboxPrimitive.Option>,
      "value"
    >,
    "children"
  > {
  value: T;
  children?: React.ReactNode;
  iconClassName?: string;
}

export const ListboxOption = <T,>({
  className,
  value,
  children,
  iconClassName,
  ...props
}: ListboxOption<T>) => (
  <ListboxPrimitive.Option
    className={cn(
      "flex cursor-pointer items-center gap-x-2 p-3 text-[13px] leading-[13.25px] text-gray-500 ui-active:bg-gray-50 ui-active:text-gray-black",
      className
    )}
    value={value}
    {...props}
  >
    {({ selected }) => (
      <>
        {children}
        {selected && (
          <Check
            className={cn("ml-auto h-4 w-4 text-primary-500", iconClassName)}
          />
        )}
      </>
    )}
  </ListboxPrimitive.Option>
);
