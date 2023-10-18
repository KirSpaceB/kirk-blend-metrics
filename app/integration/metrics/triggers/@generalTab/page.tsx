"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { ErrorMessage as HookFormErrorMessage } from "@hookform/error-message";

import {
  Button,
  ErrorMessage,
  HelperText,
  Input,
  InputGroup,
  InputRightElement,
  Label,
  Textarea,
} from "@/components/ui";
import { RemainCharacters } from "@/components/remain-characters";
import { hookFormHasError } from "@/lib/utils";
import { AlertCircle } from "@/components/icons";

const schema = z.object({
  name: z
    .string()
    .max(30, "Must contain at most 30 character(s)")
    .min(1, "Must contain at least 1 character(s)"),
  longDescription: z
    .string()
    .max(130, "Must contain at most 130 character(s)")
    .min(1, "Must contain at least 1 character(s)"),
  shortDescription: z
    .string()
    .max(40, "Must contain at most 40 character(s)")
    .min(1, "Must contain at least 1 character(s)"),
  hintText: z
    .string()
    .max(50, "Must contain at most 50 character(s)")
    .min(1, "Must contain at least 1 character(s)"),
});

type FormValues = z.infer<typeof schema>;

export default function GeneralTab() {
  const {
    register,
    handleSubmit,
    control,
    formState: { isValid, errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });
  const { push } = useRouter();

  const onSubmit: SubmitHandler<FormValues> = (variables) => {
    push("/integration/metrics/triggers/events");
  };

  return (
    <form
      className="space-y-6 rounded-lg border border-gray-200 bg-white p-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="space-y-1">
        <Label className="text-gray-700" htmlFor="name" size="sm">
          Name
        </Label>
        <div className="flex justify-between">
          <HelperText size="sm">
            Enter a user friendly name for this trigger that describes what
            makes it run.
          </HelperText>
          <HelperText className="leading-5">
            <RemainCharacters control={control} name="name" max={30} />
          </HelperText>
        </div>

        <InputGroup>
          <Input
            className="text-sm"
            id="name"
            placeholder="e.g. New Order Trigger"
            {...register("name")}
            isInvalid={hookFormHasError({
              errors,
              name: "name",
            })}
          />
          <InputRightElement>
            {hookFormHasError({ errors, name: "name" }) && (
              <AlertCircle className="text-error-500" />
            )}
          </InputRightElement>
        </InputGroup>

        <HookFormErrorMessage
          errors={errors}
          name="name"
          render={({ message }) => (
            <ErrorMessage size="sm">{message}</ErrorMessage>
          )}
        />
      </div>

      <div className="space-y-1">
        <Label className="text-gray-700" htmlFor="long-description" size="sm">
          Long Description
        </Label>
        <div className="flex justify-between">
          <HelperText size="sm">
            Describe clearly the purpose of this trigger in a complete sentence
          </HelperText>
          <HelperText className="leading-5">
            <RemainCharacters
              control={control}
              name="longDescription"
              max={130}
            />
          </HelperText>
        </div>
        <Textarea
          className="h-[102px] text-sm"
          id="long-description"
          placeholder="e.g. Triggers when a new order is created."
          {...register("longDescription")}
          isInvalid={hookFormHasError({
            errors,
            name: "longDescription",
          })}
        />

        <HookFormErrorMessage
          errors={errors}
          name="longDescription"
          render={({ message }) => (
            <ErrorMessage size="sm">{message}</ErrorMessage>
          )}
        />
      </div>

      <div className="space-y-1">
        <Label className="text-gray-700" htmlFor="short-description" size="sm">
          Short Description
        </Label>
        <div className="flex justify-between">
          <HelperText size="sm">
            Describe clearly the purpose of this trigger in a complete sentence
          </HelperText>
          <HelperText className="leading-5">
            <RemainCharacters
              control={control}
              name="shortDescription"
              max={40}
            />
          </HelperText>
        </div>

        <InputGroup>
          <Input
            className="text-sm"
            id="short-description"
            placeholder="e.g. Triggers when a new order is created."
            {...register("shortDescription")}
            isInvalid={hookFormHasError({
              errors,
              name: "shortDescription",
            })}
          />
          <InputRightElement>
            {hookFormHasError({ errors, name: "shortDescription" }) && (
              <AlertCircle className="text-error-500" />
            )}
          </InputRightElement>
        </InputGroup>

        <HookFormErrorMessage
          errors={errors}
          name="shortDescription"
          render={({ message }) => (
            <ErrorMessage size="sm">{message}</ErrorMessage>
          )}
        />
      </div>

      <div className="space-y-1">
        <Label className="text-gray-700" htmlFor="hint-text" size="sm">
          Hint Text <span className="text-gray-400">(optional)</span>
        </Label>

        <div className="flex justify-between">
          <HelperText size="sm">
            Provide additional hint text to help guide users through the use of
            this trigger event.
          </HelperText>
          <HelperText className="leading-5">
            <RemainCharacters control={control} name="hintText" max={50} />
          </HelperText>
        </div>

        <InputGroup>
          <Input
            className="text-sm"
            id="hint-text"
            placeholder="This hint text will be displayed to users when they are setting up the trigger in the workflow builder."
            {...register("hintText")}
            isInvalid={hookFormHasError({
              errors,
              name: "hintText",
            })}
          />
          <InputRightElement>
            {hookFormHasError({ errors, name: "hintText" }) && (
              <AlertCircle className="text-error-500" />
            )}
          </InputRightElement>
        </InputGroup>

        <HookFormErrorMessage
          errors={errors}
          name="hintText"
          render={({ message }) => (
            <ErrorMessage size="sm">{message}</ErrorMessage>
          )}
        />
      </div>

      <div className="flex justify-end">
        <Button type="submit" disabled={!isValid}>
          Save & Continue
        </Button>
      </div>
    </form>
  );
}
