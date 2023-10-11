import * as React from "react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { FieldPath, FieldErrors, get } from "react-hook-form";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getValidChildren(children: React.ReactNode) {
  return React.Children.toArray(children).filter((child) =>
    React.isValidElement(child)
  ) as React.ReactElement[];
}

export function mergeRefs<T = any>(
  ...refs: Array<React.MutableRefObject<T> | React.LegacyRef<T>>
): React.RefCallback<T> {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null) {
        (ref as React.MutableRefObject<T | null>).current = value;
      }
    });
  };
}

export function getSize<TElement extends Element>(element: TElement) {
  const { width, height } = element.getBoundingClientRect();
  return { width, height };
}

export function computePercentage(value: number, percentage: number) {
  return (value * percentage) / 100;
}

export function computeCircumference(radius: number) {
  return 2 * Math.PI * radius;
}

export function nope() {}

export function isString(arg: any): arg is string {
  return typeof arg === "string";
}

export function first<T extends any[] | string>(arg: T) {
  return arg[0];
}

export function last(arg: string | string[]) {
  return arg[0];
}

export const createContext = <TValue>({
  displayName,
  value,
  errorMessage,
}: {
  value?: TValue;
  displayName?: string;
  errorMessage?: string;
} = {}) => {
  const Context = React.createContext(value);
  Context.displayName = displayName;

  const useContext = () => {
    const context = React.useContext(Context);
    if (!context) {
      throw new Error(errorMessage);
    }
    return context;
  };

  return [Context.Provider, useContext] as const;
};

export const createStrictContext = <TValue>({
  value,
  displayName,
  errorMessage,
  strict = true,
}: {
  value?: TValue;
  strict?: boolean;
  errorMessage?: string;
  displayName?: string;
}) => {
  const Context = React.createContext(value);
  Context.displayName = displayName;

  const useContext = () => {
    const context = React.useContext(Context);
    if (!context && strict) {
      throw new Error(errorMessage);
    }
    return context;
  };

  return [Context.Provider, useContext] as const;
};

export function verifyFileType(
  fileName: string,
  extensions: string[]
): boolean {
  if (extensions.length === 0) {
    return false;
  }
  const [extension, ...remainExtensions] = extensions;
  return fileName.endsWith(extension)
    ? true
    : verifyFileType(fileName, remainExtensions);
}

export const isImg = (name: string) => {
  return verifyFileType(name, [
    ".png",
    ".jpg",
    ".jpeg",
    ".webp",
    ".gif",
    ".svg",
  ]);
};

export const isVideo = (name: string) => {
  return verifyFileType(name, [".mp4"]);
};

export const isDoc = (name: string) => {
  return verifyFileType(name, [".pdf"]);
};

export function convertToKbOrMb(bytes: number) {
  const kbs = bytes / 1000;
  return kbs < 1000 ? `${kbs.toFixed(2)}KB` : `${(kbs / 1000).toFixed(2)}MB`;
}

export function isArray(arg: any): arg is any[] {
  return Array.isArray(arg);
}

export function countCharacters(
  arg: string | number | any[] | Record<string, any> | null | undefined
): number {
  if (isNull(arg) || isUndefined(arg)) {
    return 0;
  } else if (isNumber(arg)) {
    return arg;
  } else if (isString(arg)) {
    return arg.length;
  } else if (isArray(arg)) {
    return arg.length;
  }
  return 1;
}

export function isUndefined(arg: any): arg is undefined {
  return typeof arg === "undefined";
}

export function isNotUndefined(arg: any) {
  return typeof arg !== "undefined";
}

export function isNull(arg: any): arg is null {
  return arg === null;
}

export function isNumber(arg: any): arg is number {
  return typeof arg === "number";
}

export function isFn(arg: any): arg is (...args: any[]) => any {
  return typeof arg === "function";
}

export function toPxIfNumber(arg: string | number) {
  if (isNumber(arg)) {
    return `${arg}px`;
  }

  return arg;
}

export function get2DArray<T extends any[]>(arr: T, size = 2): T[] {
  if (isEmpty(arr) || size < 1) {
    return [];
  }

  const recursion = (arr: T, size: number, result = [] as T[]): T[] => {
    if (size >= arr.length) {
      return [...result, [...arr]] as T[];
    }

    const remain = arr.slice(size);
    const slice = arr.slice(0, size);

    return recursion(remain as T, size, [...result, slice] as T[]);
  };

  return recursion(arr, size);
}

export function chunk<T extends unknown[]>(arr: T, size = 2): T[] {
  const recursion = (arr: T, size: number, result = [] as T[]): T[] => {
    if (size >= arr.length) {
      return [...result, [...arr]] as T[];
    }

    const remainArr = arr.slice(size);
    const sliced = arr.slice(0, size);

    return recursion(remainArr as T, size, [...result, sliced] as T[]);
  };

  if (isEmpty(arr) || size < 1) {
    return [] as T[];
  }

  return recursion(arr, size);
}

export function add(...nums: number[]): number {
  function recursion(nums: number[], left = 0, result = 0): number {
    if (nums.length === left) {
      return result;
    }
    const newResult = result + nums[left];
    return recursion(nums, left + 1, newResult);
  }
  return recursion(nums);
}

export function isEmpty<T extends unknown[]>(arr: T): boolean {
  return arr.length === 0;
}

export function isNotEmpty<T extends unknown[]>(arr: T): boolean {
  return arr.length > 0;
}

export function hookFormHasError<
  TFormValues extends Record<string, any> = Record<string, any>
>({
  errors,
  name,
}: {
  errors: FieldErrors<TFormValues>;
  name: FieldPath<TFormValues>;
}) {
  const error = get(errors, name);
  return error ? true : false;
}

export function debounce(cb: () => void, wait?: number) {
  let timeoutId: ReturnType<typeof setTimeout> | undefined = setTimeout(
    cb,
    wait
  );

  function cancel() {
    clearTimeout(timeoutId);
    timeoutId = undefined;
  }

  function flush() {
    cancel();
    cb();
  }

  return {
    cancel,
    flush,
  };
}

export const getId = (
  (id = 1) =>
  () =>
    id++
)();

export function callAll<
  T extends any[],
  K extends ((...args: T) => void) | undefined
>(...fns: K[]) {
  return (...args: T) => fns.forEach((fn) => fn?.(...args));
}

export function flatten<T extends any[]>(arr: T) {
  return arr.flat(1);
}

export function noop() {}

export function keys<T extends Record<string, any>>(record: T): (keyof T)[] {
  return Object.keys(record);
}

export function withId<T = unknown>(arr: T[]) {
  let id = 0;
  return arr.map((value) => ({ value, id: id++ }));
}

export function pick<T extends Record<string, any>, K extends keyof T>(
  record?: T,
  ...keys: K[]
) {
  if (!record) {
    return;
  }

  let result = {} as {
    [Property in K]: T[Property];
  };

  keys.forEach((key) => {
    if (record[key]) {
      result = {
        ...result,
        [key]: record[key],
      };
    }
  });

  return result;
}
