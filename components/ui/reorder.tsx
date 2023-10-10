"use client";

import * as React from "react";
import { Reorder, useDragControls, DragControls } from "framer-motion";

import { cn, isFn } from "@/lib/utils";

const ReorderGroup = React.forwardRef<
  React.ComponentRef<typeof Reorder.Group>,
  React.ComponentPropsWithoutRef<typeof Reorder.Group>
>(({ ...props }, ref) => <Reorder.Group {...props} ref={ref} />);

ReorderGroup.displayName = "ReorderGroup";

const ReorderItem = React.forwardRef<
  React.ComponentRef<typeof Reorder.Item>,
  Omit<React.ComponentPropsWithoutRef<typeof Reorder.Item>, "children"> & {
    children:
      | (({
          dragControls,
        }: {
          dragControls: DragControls;
          onDrag: (event: React.PointerEvent<Element>) => void;
        }) => React.ReactNode)
      | React.ReactNode;
  }
>(({ children, className, ...props }, ref) => {
  const dragControls = useDragControls();
  const shouldUseRenderProps = isFn(children);

  return (
    <Reorder.Item
      className={cn("relative", className)}
      dragListener={shouldUseRenderProps ? false : undefined}
      dragControls={shouldUseRenderProps ? dragControls : undefined}
      {...props}
      ref={ref}
    >
      {shouldUseRenderProps
        ? children({
            dragControls,
            onDrag: (event) => dragControls.start(event),
          })
        : children}
    </Reorder.Item>
  );
});

ReorderItem.displayName = "ReorderItem";

export { ReorderGroup, ReorderItem };
