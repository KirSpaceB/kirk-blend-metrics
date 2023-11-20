"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { z } from "zod";
import { useForm, SubmitHandler, Controller, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage as HookFormErrorMessage } from "@hookform/error-message";

import { AlertCircle, Check } from "@/components/icons";
import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  CloseButton,
  Dropzone,
  DropzoneState,
  ErrorMessage,
  HelperText,
  Input,
  InputGroup,
  InputRightElement,
  Label,
  Textarea,
} from "@/components/ui";
import { getPreview } from "@/lib/dom";
import { RemainCharacters } from "@/components/remain-characters";
import { hookFormHasError, isArray } from "@/lib/utils";

const schema = z.object({
  name: z
    .string()
    .max(50, "Must contain at most 50 character(s)")
    .min(1, "Must contain at least 1 character(s)"),
  description: z
    .string()
    .max(200, "Must contain at most 200 character(s)")
    .min(1, "Must contain at least 1 character(s)"),
  categories: z
    .string()
    .max(10, "Must contain at most 10 character(s)")
    .min(1, "Must contain at least 1 character(s)"),
  tags: z
    .string()
    .max(10, "Must contain at most 10 character(s)")
    .min(1, "Must contain at least 1 character(s)"),
  logo: z
    .array(z.any())
    .min(1, "Must contain at least 1 image(s)")
    .max(1, "Must contain at most 1 image(s)"),
  additionalImage: z
    .array(z.any())
    .min(1, "Must contain at least 1 image(s)")
    .max(10, "Must contain at most 1 image(s)"),
});

type FormValues = {
  name: string;
  description: string;
  categories: string;
  tags: string;
  logo: DropzoneState;
  additionalImage: DropzoneState;
};

function General() {
  const {
    control,
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });
  const [preview, setPreview] = React.useState<string>();
  const logo = useWatch({ control, name: "logo" });

  React.useEffect(() => {
    const [item] = logo || [];
    const { data } = item || {};
    const cleanup = getPreview(data, setPreview);

    return cleanup;
  }, [logo]);

  const onSubmit: SubmitHandler<FormValues> = (variables) => {};

  return (
    <div className="px-[88px] py-8">
      <Alert variant="primary">
        <AlertIcon>
          <AlertCircle className="h-5 w-5" />
        </AlertIcon>
        <AlertContent>
          <AlertTitle className="text-gray-700">General Information</AlertTitle>
          <AlertDescription className="text-gray-700">
            In this section, you can make changes to general information about
            your integration such as its name, description, categories, tags,
            logo, and images/screenshots. These details are required in order to
            publish your integration to our marketplace
          </AlertDescription>
          <Link
            className="mt-3 inline-block text-sm font-semibold text-gray-500 hover:underline"
            href="#"
          >
            Learn more
          </Link>
        </AlertContent>
        <CloseButton />
      </Alert>

      <form
        className="mt-6 space-y-6 rounded-lg border border-gray-200 bg-white p-6 shadow-xs"
        onSubmit={handleSubmit(onSubmit, (errors) => console.log(errors))}
      >
        <div className="space-y-1.5">
          <Label className="text-gray-700" htmlFor="name" size="sm">
            Name
          </Label>
          <div className="flex justify-between">
            <HelperText size="sm">
              This name will appear in our marketplace.
            </HelperText>
            <HelperText className="leading-5">
              <RemainCharacters control={control} name="name" max={50} />
            </HelperText>
          </div>
          <InputGroup>
            <Input
              {...register("name")}
              id="name"
              isInvalid={hookFormHasError({ errors, name: "name" })}
            />
            {hookFormHasError({ errors, name: "name" }) && (
              <InputRightElement>
                <AlertCircle className="text-error-500" />
              </InputRightElement>
            )}
          </InputGroup>
          <HookFormErrorMessage
            errors={errors}
            name="name"
            render={({ message }) => (
              <ErrorMessage size="sm">{message}</ErrorMessage>
            )}
          />
        </div>

        <div className="space-y-1.5">
          <Label className="text-gray-700" htmlFor="desc" size="sm">
            Description
          </Label>
          <div className="flex justify-between">
            <HelperText size="sm">
              Provide a short description that describes what this integration
              does.
            </HelperText>
            <HelperText className="leading-5">
              <RemainCharacters
                control={control}
                name="description"
                max={200}
              />
            </HelperText>
          </div>
          <Textarea
            {...register("description")}
            className="h-[102px]"
            id="desc"
            placeholder="This will be the description user see in our marketplace..."
            isInvalid={hookFormHasError({ errors, name: "description" })}
          />
          <HookFormErrorMessage
            errors={errors}
            name="description"
            render={({ message }) => (
              <ErrorMessage size="sm">{message}</ErrorMessage>
            )}
          />
        </div>

        <div className="space-y-1.5">
          <Label className="text-gray-700" htmlFor="categories" size="sm">
            Categories
          </Label>
          <div className="flex justify-between">
            <HelperText size="sm">
              Provide categories that describe this integration.
            </HelperText>
            <HelperText className="leading-5">
              <RemainCharacters control={control} name="categories" max={10} />
            </HelperText>
          </div>
          <InputGroup>
            <Input
              {...register("categories")}
              id="categories"
              placeholder="Add categories"
              isInvalid={hookFormHasError({ errors, name: "categories" })}
            />
            <InputRightElement>
              {hookFormHasError({ errors, name: "categories" }) && (
                <AlertCircle className="text-error-500" />
              )}
            </InputRightElement>
          </InputGroup>
          <HookFormErrorMessage
            errors={errors}
            name="categories"
            render={({ message }) => (
              <ErrorMessage size="sm">{message}</ErrorMessage>
            )}
          />
        </div>

        <div className="space-y-1.5">
          <Label className="text-gray-700" htmlFor="tags" size="sm">
            Tags
          </Label>
          <div className="flex justify-between">
            <HelperText size="sm">
              Provide tags that describe this integration.
            </HelperText>
            <HelperText className="leading-5">
              <RemainCharacters control={control} name="tags" max={10} />
            </HelperText>
          </div>
          <InputGroup>
            <Input
              {...register("tags")}
              id="tags"
              placeholder="Add tags"
              isInvalid={hookFormHasError({ errors, name: "tags" })}
            />
            <InputRightElement>
              {hookFormHasError({ errors, name: "tags" }) && (
                <AlertCircle className="text-error-500" />
              )}
            </InputRightElement>
          </InputGroup>
          <HookFormErrorMessage
            errors={errors}
            name="tags"
            render={({ message }) => (
              <ErrorMessage size="sm">{message}</ErrorMessage>
            )}
          />
        </div>

        <div className="space-y-2.5">
          <Label className="text-gray-700" size="sm">
            Logo
          </Label>
          <div className="flex justify-between">
            <HelperText size="sm">
              A square logo that will be used to identify your integration.
            </HelperText>
            <HelperText className="leading-5">
              <RemainCharacters control={control} name="logo" max={1} />
            </HelperText>
          </div>
          <div className="flex gap-x-2.5">
            <div className="flex h-[74px] w-[74px] flex-none items-center justify-center self-center overflow-hidden rounded-lg border border-gray-200">
              {preview ? (
                <img
                  className="h-full w-full object-cover"
                  src={preview}
                  alt="Logo preview"
                />
              ) : (
                <div className="relative h-[32px] w-[32px]">
                  <Image
                    className="object-contain"
                    src="/preview-placeholder.png"
                    alt="Placeholder"
                    sizes="50vw"
                    fill
                  />
                </div>
              )}
            </div>
            <Controller
              control={control}
              name="logo"
              render={({ field: { onChange, value, onBlur } }) => (
                <Dropzone
                  className="flex-auto"
                  onChange={onChange}
                  value={value}
                  onBlur={onBlur}
                />
              )}
            />
          </div>
          <HookFormErrorMessage
            errors={errors}
            name="logo"
            render={({ message }) => (
              <ErrorMessage size="sm">{message}</ErrorMessage>
            )}
          />
        </div>

        <div className="space-y-2.5">
          <Label className="text-gray-700" size="sm">
            Additional Images/Screenshots
          </Label>
          <div className="flex justify-between">
            <HelperText size="sm">
              Provide at least 1 image/screenshot to preview this integration in
              our marketplace.
            </HelperText>
            <HelperText className="leading-5">
              <RemainCharacters
                control={control}
                name="additionalImage"
                max={10}
              />
            </HelperText>
          </div>
          <Controller
            control={control}
            name="additionalImage"
            render={({ field: { onChange, value, onBlur } }) => (
              <Dropzone
                onChange={onChange}
                value={value}
                onBlur={onBlur}
                maxFiles={10}
              />
            )}
          />
          <HookFormErrorMessage
            errors={errors}
            name="additionalImage"
            render={({ message }) => (
              <ErrorMessage size="sm">{message}</ErrorMessage>
            )}
          />
        </div>

        <div className="mt-6 flex justify-end">
          <Button type="submit" disabled={!isValid}>
            <Check className="h-[15px] w-[15px]" />
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}

export default General;
