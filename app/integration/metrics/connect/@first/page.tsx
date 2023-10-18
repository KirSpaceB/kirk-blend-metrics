"use client";

import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ErrorMessage as HookFromErrorMessage } from "@hookform/error-message";

import {
  Button,
  Dropzone,
  DropzoneState,
  ErrorMessage,
  HelperText,
  Input,
  InputGroup,
  InputRightElement,
  Label,
  Listbox,
  ListboxButton,
  ListboxContent,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
  RadioGroup,
  RadioGroupItemSelector,
} from "@/components/ui";
import { hookFormHasError } from "@/lib/utils";
import { AlertCircle } from "@/components/icons";

const schema = z.discriminatedUnion("value", [
  z.object({
    value: z.literal("API-URL"),
    url: z.string().url(),
  }),
  z.object({
    value: z.literal("DATASETS"),
    selected: z.string().min(1, "Must select 1 option(s)"),
  }),
  z.object({
    value: z.literal("API-FILE"),
    file: z.object(
      {
        data: z.any(),
      },
      { required_error: "Must select 1 file(s)" }
    ),
  }),
]);

interface FormValues {
  value: "API-URL" | "DATASETS" | "API-FILE";
  url: string;
  selected: string;
  file: DropzoneState;
}

export default function FirstTab() {
  const {
    control,
    handleSubmit,
    register,
    formState: { isValid, errors },
    watch,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });
  const { push } = useRouter();
  const value = watch("value");

  const onSubmit: SubmitHandler<FormValues> = (variables) => {
    push("/integration/metrics/connect?tab=second");
  };

  return (
    <form
      className="border border-gray-200 bg-white p-6 shadow-xs"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className="text-base font-semibold text-gray-900">Connect Data</h3>
      <p className="mt-1 text-sm text-gray-500">
        In this section, you can connect the API endpoints that your integration
        will use, configure their authentications, and test them.
      </p>

      <div className="mt-6">
        <Label
          className="leading-[16.94px] text-gray-900"
          size="sm"
          htmlFor="sourceData"
        >
          Import from...
        </Label>

        <Controller
          control={control}
          name="value"
          render={({ field: { onChange, ...props } }) => (
            <RadioGroup
              className="mt-3 grid-cols-3 gap-x-2"
              onValueChange={onChange}
              {...props}
            >
              <RadioGroupItemSelector value="API-URL">
                <Label>API URL</Label>
                <HelperText>Import data from an API URL.</HelperText>
              </RadioGroupItemSelector>
              <RadioGroupItemSelector value="DATASETS">
                <Label>My Datasets</Label>
                <HelperText>Import data from your datasets.</HelperText>
              </RadioGroupItemSelector>
              <RadioGroupItemSelector value="API-FILE">
                <Label>API File</Label>
                <HelperText>Import data from an API file.</HelperText>
              </RadioGroupItemSelector>
            </RadioGroup>
          )}
        />

        <HookFromErrorMessage
          errors={errors}
          name="value"
          render={({ message }) => (
            <ErrorMessage className="mt-1.5" size="sm">
              {message}
            </ErrorMessage>
          )}
        />
      </div>

      {value === "API-URL" && (
        <div className="mt-6 space-y-1.5">
          <Label className="uppercase" size="sm" htmlFor="url">
            API url
          </Label>

          <InputGroup>
            <Input
              {...register("url")}
              id="url"
              placeholder="e.g. https://example.com"
              isInvalid={hookFormHasError({ errors, name: "url" })}
            />
            <InputRightElement>
              {hookFormHasError({ errors, name: "url" }) && (
                <AlertCircle className="text-error-500" />
              )}
            </InputRightElement>
          </InputGroup>

          <HookFromErrorMessage
            errors={errors}
            name="url"
            render={({ message }) => (
              <ErrorMessage size="sm">{message}</ErrorMessage>
            )}
          />
        </div>
      )}

      {value === "DATASETS" && (
        <Controller
          control={control}
          name="selected"
          render={({ field: { value, onChange, ...field } }) => (
            <Listbox
              className="mt-6 space-y-1.5"
              value={value}
              onChange={onChange}
            >
              <ListboxLabel size="sm">My datasets</ListboxLabel>

              <HelperText size="sm">Select API Endpoint</HelperText>

              <ListboxContent>
                <ListboxButton
                  placeholder="Choose Metric"
                  isInvalid={hookFormHasError({ errors, name: "selected" })}
                />
                <ListboxOptions>
                  <ListboxOption value="https://api.example.com/v1">
                    https://api.example.com/v1
                  </ListboxOption>
                  <ListboxOption value="https://api.example.com/v2">
                    https://api.example.com/v2
                  </ListboxOption>
                  <ListboxOption value="https://api.example.com/v3">
                    https://api.example.com/v3
                  </ListboxOption>
                  <ListboxOption value="https://api.example.com/v4">
                    https://api.example.com/v4
                  </ListboxOption>
                </ListboxOptions>
              </ListboxContent>

              <HookFromErrorMessage
                errors={errors}
                name="selected"
                render={({ message }) => (
                  <ErrorMessage size="sm">{message}</ErrorMessage>
                )}
              />
            </Listbox>
          )}
        />
      )}

      {value === "API-FILE" && (
        <Controller
          control={control}
          name="file"
          render={({ field: { onChange, onBlur, value } }) => (
            <div className="mt-6 space-y-1.5">
              <Label size="sm" htmlFor="file">
                API File
              </Label>

              <Dropzone onBlur={onBlur} value={value} onChange={onChange} />

              <HookFromErrorMessage
                errors={errors}
                name="file"
                render={({ message }) => (
                  <ErrorMessage size="sm">{message}</ErrorMessage>
                )}
              />
            </div>
          )}
        />
      )}

      <div className="mt-6 flex justify-end">
        <Button type="submit" disabled={!isValid}>
          Save & Continue
        </Button>
      </div>
    </form>
  );
}
