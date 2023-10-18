"use client";

import * as React from "react";
import { useDropzone } from "react-dropzone";

import { cn, convertToKbOrMb, isDoc, isImg, isVideo } from "@/lib/utils";
import { useControllableState, useToggle } from "@/lib/hooks";
import { Check, File, Trash, UploadCloud, Video } from "../icons";
import { CircularProgress, Progress } from "./progress";
import { IconButton } from "./icon-button";

export type Type = "doc" | "img" | "video" | "other";

export type DropzoneState = {
  data: File | File[];
};

export type State = {
  name: string;
  size: string;
  type: Type;
  hasError: boolean;
  progress: number;
};

interface DropzoneProps {
  value?: DropzoneState;
  className?: string;
  maxFiles?: number;
  onChange?: (value: DropzoneState | undefined) => void;
  onBlur?: () => void;
  onTryAgain?: () => void;
  icon?: boolean;
  accept?: { [key: string]: string[] };
  state?: State;
  onStateChange?: (value: State | undefined) => void;
}

const defaultAcceptedExtensions = {
  "image/png": [".png"],
  "image/jpeg": [".jpeg", ".jpg"],
  "image/webp": [".webp"],
  "image/gif": [".gif"],
  "image/svg+xml": [".svg"],
  "image/bmp": [".bmp"],
};

export const Dropzone = ({
  onChange,
  onStateChange,
  className,
  maxFiles = 0,
  onBlur,
  onTryAgain,
  icon = false,
  accept = defaultAcceptedExtensions,
  ...props
}: DropzoneProps) => {
  const [isDragAccept, { off, on }] = useToggle();
  const [value, setValue] = useControllableState<DropzoneState | undefined>({
    value: props.value,
    onChange,
  });
  const [state, setState] = useControllableState<State | undefined>({
    value: props.state,
    onChange: onStateChange,
  });

  const onDropAccepted = React.useCallback(
    (files: File[]) => {
      const [firstFile] = files;
      const { name, size } = firstFile;

      if (maxFiles > 1) {
        setValue({
          data: files,
        });
      } else {
        setValue({
          data: firstFile,
        });
      }

      const type: Type = isImg(name)
        ? "img"
        : isVideo(name)
        ? "video"
        : isDoc(name)
        ? "doc"
        : "other";
      const nextState = {
        name,
        type,
        progress: 0,
        hasError: false,
        size: convertToKbOrMb(size),
      };

      on();
      setState(nextState);
    },
    [on, setValue, setState, maxFiles]
  );

  const onDropRejected = React.useCallback(() => {
    off();
    setValue(undefined);
    setState(undefined);
  }, [off, setValue, setState]);

  const onDelete = () => {
    setValue(undefined);
    off();
  };

  const onRecover = (onTryAgain?: () => void) => {
    setState((prev) => {
      const prevState = prev || ({} as State);
      return { ...prevState, hasError: false };
    });
    onTryAgain?.();
  };

  const multiple = maxFiles > 1;

  const { getInputProps, getRootProps, open } = useDropzone({
    noClick: true,
    multiple,
    accept,
    maxFiles,
    onDropAccepted,
    onDropRejected,
  });

  const { hasError, name, progress, size, type } = state || {};

  return (
    <div
      {...getRootProps({
        onBlur,
      })}
      className={cn(
        "rounded-lg bg-white focus-visible:outline-none",
        className
      )}
    >
      <input {...getInputProps()} />
      {isDragAccept ? (
        <div
          className={cn(
            "rounded-lg border border-gray-100 p-[9px] pb-[17px] pl-[17px] hover:border-2 hover:border-primary-500 hover:p-2 hover:pb-4 hover:pl-4",
            hasError &&
              "border border-error-300 bg-error-50 hover:border-error-500 hover:p-[9px] hover:pb-[17px] hover:pl-[17px]"
          )}
        >
          <div className="flex gap-x-1">
            <div className="flex flex-auto gap-x-4 pt-2">
              <div
                className={cn(
                  "inline-flex h-8 w-8 flex-none items-center justify-center rounded-full border-[4px] border-primary-25 bg-primary-50 text-primary-500",
                  hasError && "border-error-50 bg-error-100 text-error-500"
                )}
              >
                {(type === "img" || type === "doc") && <File />}
                {type === "video" && <Video />}
                {type === "other" && <UploadCloud />}
              </div>
              <div className="flex flex-auto flex-col">
                <span
                  className={cn(
                    "inline-block text-sm font-medium text-gray-700",
                    hasError && "text-error-500"
                  )}
                >
                  {hasError ? "Upload failed, please try again" : name}
                </span>
                <span
                  className={cn(
                    "inline-block text-sm text-gray-500",
                    hasError && "text-error-500"
                  )}
                >
                  {hasError ? name : size}
                </span>
              </div>
            </div>

            {progress === 100 ? (
              <div className="pr-2 pt-2">
                <span className="inline-flex h-4 w-4 flex-none items-center justify-center rounded-full bg-primary-500">
                  <Check className="h-2.5 w-2.5 text-white" />
                </span>
              </div>
            ) : (
              <IconButton
                onClick={onDelete}
                variant="ghost"
                visual="gray"
                type="button"
              >
                <Trash
                  className={cn(
                    "h-5 w-5 text-gray-500",
                    hasError && "text-error-500"
                  )}
                />
              </IconButton>
            )}
          </div>

          {hasError ? (
            <button
              className="mt-1 text-sm font-semibold text-error-500 hover:underline focus-visible:outline-none"
              onClick={() => onRecover(onTryAgain)}
            >
              Try again
            </button>
          ) : (
            <div className="mt-1 flex items-center gap-x-3 pl-12">
              <div className="flex-auto py-1.5">
                <Progress value={progress} />
              </div>
              <span className="text-sm font-medium text-gray-700">
                {progress}%
              </span>
            </div>
          )}
        </div>
      ) : (
        <div className="rounded-lg border border-gray-100 px-[25px] py-[17px] hover:border-2 hover:border-primary-500 hover:px-6 hover:py-4">
          {icon && (
            <div className="mb-3 flex items-center justify-center">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border-[6px] border-gray-50 bg-gray-100">
                <UploadCloud className="h-5 w-5 text-gray-500" />
              </div>
            </div>
          )}
          <div className="flex items-center justify-center gap-x-1">
            <button
              className="text-center text-sm font-semibold text-primary-500 hover:underline focus:outline-none"
              onClick={open}
              type="button"
            >
              Click to upload
            </button>
            <span className="text-center text-sm text-gray-600">
              or drag and drop
            </span>
          </div>
          <div className="mt-1 flex justify-center">
            <span className="text-center text-sm leading-[18px] text-gray-600">
              SVG, PNG, JPG or GIF (max. 800x400px)
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export interface CircularProgressDropzoneState {
  file: File;
  name: string;
  size: string;
  type: Type;
  hasError: boolean;
  progress: number;
}

interface CircularProgressDropzoneProps {
  value?: CircularProgressDropzoneState;
  className?: string;
  maxFiles?: number;
  onChange?: (value: CircularProgressDropzoneState | undefined) => void;
  onBlur?: () => void;
  onTryAgain?: () => void;
  icon?: boolean;
  accept?: { [key: string]: string[] };
  multiple?: boolean;
}

export const CircularProgressDropzone = ({
  value,
  onChange,
  className,
  maxFiles,
  onBlur,
  onTryAgain,
  icon = false,
  accept = defaultAcceptedExtensions,
}: CircularProgressDropzoneProps) => {
  const [isDragAccept, { off, on }] = useToggle();
  const [state, setValue] = useControllableState<
    CircularProgressDropzoneState | undefined
  >({
    value,
    onChange,
  });

  const onDropAccepted = React.useCallback(
    (files: File[]) => {
      const [firstFile] = files;
      const { name, size } = firstFile;

      const type: Type = isImg(name)
        ? "img"
        : isVideo(name)
        ? "video"
        : isDoc(name)
        ? "doc"
        : "other";
      const nextState = {
        name,
        type,
        progress: 0,
        hasError: false,
        file: firstFile,
        size: convertToKbOrMb(size),
      };

      on();
      setValue(nextState);
    },
    [on, setValue]
  );

  const onDropRejected = React.useCallback(() => {
    off();
    setValue(undefined);
  }, [off, setValue]);

  const onDelete = () => {
    setValue(undefined);
    off();
  };

  const onRecover = (onTryAgain?: () => void) => {
    setValue((prev) => {
      const prevState = prev || ({} as CircularProgressDropzoneState);
      return { ...prevState, hasError: false };
    });
    onTryAgain?.();
  };

  const { getInputProps, getRootProps, open } = useDropzone({
    noClick: true,
    multiple: false,
    accept,
    maxFiles,
    onDropAccepted,
    onDropRejected,
  });

  const { hasError, name, progress, size, type } = state || {};

  return (
    <div
      {...getRootProps({
        onBlur,
      })}
      className={cn(
        "rounded-lg bg-white focus-visible:outline-none",
        className
      )}
    >
      <input {...getInputProps()} />
      {isDragAccept ? (
        <div
          className={cn(
            "flex items-start rounded-lg border border-gray-200 bg-white p-[17px] hover:border-2 hover:border-primary-500 hover:p-4",
            hasError && "border-error-300 hover:border-error-500 hover:p-[17px]"
          )}
        >
          <div
            className={cn(
              "inline-flex h-8 w-8 flex-none items-center justify-center rounded-full border-[4px] border-primary-25 bg-primary-50 text-primary-500",
              hasError && "border-error-50 bg-error-100 text-error-500"
            )}
          >
            {(type === "img" || type === "doc") && <File />}
            {type === "video" && <Video />}
            {type === "other" && <UploadCloud />}
          </div>
          <div className="ml-4 flex-auto">
            <div
              className={cn(
                "text-sm font-medium text-gray-700",
                hasError && "text-error-500"
              )}
            >
              {name}
            </div>
            <span
              className={cn(
                "block text-sm text-gray-600",
                hasError && "text-error-500"
              )}
            >
              {size} - {progress} uploaded
            </span>
            {hasError && (
              <button
                className="mt-1 text-sm font-semibold text-error-500 hover:underline focus-visible:outline-none"
                onClick={() => onRecover(onTryAgain)}
              >
                Try again
              </button>
            )}
          </div>
          {progress === 100 ? (
            <span className="mt-4 inline-flex h-4 w-4 flex-none items-center justify-center rounded-full bg-primary-500">
              <Check className="h-2.5 w-2.5 text-white" />
            </span>
          ) : hasError ? (
            <IconButton
              className="ml-1"
              onClick={onDelete}
              variant="ghost"
              visual="gray"
              type="button"
            >
              <Trash className={cn("h-5 w-5 text-error-500")} />
            </IconButton>
          ) : (
            <div className="ml-2 flex-none">
              <CircularProgress
                show={false}
                value={progress}
                size={32}
                strokeWidth={4}
              />
            </div>
          )}
        </div>
      ) : (
        <div className="rounded-lg border border-gray-100 px-[25px] py-[17px] hover:border-2 hover:border-primary-500 hover:px-6 hover:py-4">
          {icon && (
            <div className="mb-3 flex items-center justify-center">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border-[6px] border-gray-50 bg-gray-100">
                <UploadCloud className="h-5 w-5 text-gray-500" />
              </div>
            </div>
          )}
          <div className="flex items-center justify-center gap-x-1">
            <button
              className="text-center text-sm font-semibold text-primary-500 hover:underline focus:outline-none"
              onClick={open}
              type="button"
            >
              Click to upload
            </button>
            <span className="text-center text-sm text-gray-600">
              or drag and drop
            </span>
          </div>
          <div className="mt-1 flex justify-center">
            <span className="text-center text-sm leading-[18px] text-gray-600">
              SVG, PNG, JPG or GIF (max. 800x400px)
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
