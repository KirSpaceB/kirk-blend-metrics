import * as React from "react";
import { useCallback, useEffect, useRef } from "react";
import { useMemo, useState } from "react";

export function useDebounce<TValue>(value: TValue, delay?: number) {
  const [state, setState] = React.useState(value);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => setState(value), delay);

    return () => clearTimeout(timeoutId);
  }, [value, delay]);

  return state;
}

export function useCallbackRef<T extends (...args: any[]) => any>(
  callback: T | undefined,
  deps: React.DependencyList = []
) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(((...args) => callbackRef.current?.(...args)) as T, deps);
}

export function useControllableProp<T>(prop: T | undefined, state: T) {
  const controlled = typeof prop !== "undefined";
  const value = controlled ? prop : state;
  return useMemo<[boolean, T]>(() => [controlled, value], [controlled, value]);
}

export interface UseControllableStateProps<T> {
  value?: T;
  defaultValue?: T | (() => T);
  onChange?: (value: T) => void;
  shouldUpdate?: (prev: T, next: T) => boolean;
}

export function useControllableState<T>(props: UseControllableStateProps<T>) {
  const {
    value: valueProp,
    defaultValue,
    onChange,
    shouldUpdate = (prev, next) => prev !== next,
  } = props;

  const onChangeProp = useCallbackRef(onChange);
  const shouldUpdateProp = useCallbackRef(shouldUpdate);

  const [uncontrolledState, setUncontrolledState] = useState(defaultValue as T);
  const controlled = valueProp !== undefined;
  const value = controlled ? valueProp : uncontrolledState;

  const setValue = useCallbackRef(
    (next: React.SetStateAction<T>) => {
      const setter = next as (prevState?: T) => T;
      const nextValue = typeof next === "function" ? setter(value) : next;

      if (!shouldUpdateProp(value, nextValue)) {
        return;
      }

      if (!controlled) {
        setUncontrolledState(nextValue);
      }

      onChangeProp(nextValue);
    },
    [controlled, onChangeProp, value, shouldUpdateProp]
  );

  return [value, setValue] as [T, React.Dispatch<React.SetStateAction<T>>];
}
