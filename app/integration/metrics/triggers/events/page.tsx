"use client";

import Link from "next/link";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ErrorMessage as HookFormErrorMessage } from "@hookform/error-message";

import { AlertCircle, ArrowLeft2, Check } from "@/components/icons";
import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  CloseButton,
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
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  inputVariants,
} from "@/components/ui";
import { RemainCharacters } from "@/components/remain-characters";
import { ToggleMachineContext } from "@/machines";
import { hookFormHasError } from "@/lib/utils";

const schema = z.object({
  name: z
    .string()
    .max(40, "Must contain at most 40 character(s)")
    .min(1, "Must contain at least 1 character(s)"),
  shortDescription: z
    .string()
    .max(100, "Must contain at most 100 character(s)")
    .min(1, "Must contain at least 1 character(s)"),
  eventCategory: z.string().min(1, "Must contain at least 1 character(s)"),
  eventSource: z.string().min(1, "Must contain at least 1 character(s)"),
  specificEvent: z.string().min(1, "Must contain at least 1 character(s)"),
});

type FormValues = z.infer<typeof schema>;

export default function Events() {
  const {
    register,
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const [, send] = ToggleMachineContext.useActor();

  const onSubmit: SubmitHandler<FormValues> = (variables) => {};

  return (
    <>
      <Alert variant="primary">
        <AlertIcon>
          <AlertCircle className="h-5 w-5" />
        </AlertIcon>
        <AlertContent>
          <AlertTitle className="text-gray-700">What is the Event?</AlertTitle>
          <AlertDescription className="text-gray-700">
            In this section, you can create specific events that will trigger
            workflows through your integration. Connect the API endpoint that
            you will use for each trigger, set them up, and configure/design the
            settings users will fill out.
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

      <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center justify-between">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  className="inline-flex flex-none items-center gap-x-3 text-base font-semibold text-gray-600 focus-visible:outline-none"
                  type="button"
                  onClick={() => send("TOGGLE")}
                >
                  <ArrowLeft2 className="flex-none" /> New Event
                </button>
              </TooltipTrigger>
              <TooltipContent align="start" side="bottom">
                Back
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <Button type="submit" disabled={!isValid}>
            <Check /> Save
          </Button>
        </div>

        <div className="mt-6 space-y-6 rounded-lg border border-gray-200 bg-white p-6">
          <div className="space-y-1.5">
            <Label className="text-gray-700" htmlFor="name" size="sm">
              Name
            </Label>
            <div className="flex items-start justify-between">
              <HelperText size="sm">
                Enter a user friendly name for this event that describes what
                makes it run.
              </HelperText>
              <HelperText className="leading-5">
                <RemainCharacters control={control} name="name" max={40} />
              </HelperText>
            </div>

            <InputGroup>
              <Input
                className="text-sm"
                id="name"
                placeholder="e.g. Name of Event"
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

          <div className="space-y-1.5">
            <Label
              className="text-gray-700"
              htmlFor="short-description"
              size="sm"
            >
              Short Description
            </Label>
            <div className="flex items-start justify-between">
              <HelperText size="sm">
                Describe clearly the purpose of this event in a complete
                sentence.
              </HelperText>
              <HelperText className="leading-5">
                <RemainCharacters
                  control={control}
                  name="shortDescription"
                  max={100}
                />
              </HelperText>
            </div>

            <InputGroup>
              <Input
                className="text-sm"
                id="short-description"
                placeholder="This will be the description user see"
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

          <Controller
            control={control}
            name="eventCategory"
            render={({ field: { value, onChange, ...field } }) => (
              <Listbox
                className="space-y-1.5"
                value={value}
                onChange={onChange}
              >
                <ListboxLabel className="text-gray-700" size="sm">
                  Event Category
                </ListboxLabel>
                <HelperText size="sm">
                  Select which category you want to use.
                </HelperText>

                <ListboxContent>
                  <ListboxButton
                    placeholder="Select Event Category"
                    isInvalid={hookFormHasError({
                      errors,
                      name: "eventCategory",
                    })}
                  />
                  <ListboxOptions>
                    <ListboxOption value="Optional 1">Option 1</ListboxOption>
                  </ListboxOptions>
                </ListboxContent>

                <HookFormErrorMessage
                  errors={errors}
                  name="eventCategory"
                  render={({ message }) => (
                    <ErrorMessage size="sm">{message}</ErrorMessage>
                  )}
                />
              </Listbox>
            )}
          />

          <Controller
            control={control}
            name="eventSource"
            render={({ field: { value, onChange, ...field } }) => (
              <Listbox
                className="space-y-1.5"
                value={value}
                onChange={onChange}
              >
                <ListboxLabel className="text-gray-700" size="sm">
                  Event Source
                </ListboxLabel>

                <div className="flex items-start justify-between">
                  <HelperText size="sm">Select API Endoint.</HelperText>
                  <HelperText className="leading-5" size="sm">
                    Can’t find your event?{" "}
                    <Link className="font-semibold text-primary-500" href="#">
                      Change data set
                    </Link>
                  </HelperText>
                </div>

                <ListboxContent>
                  <ListboxButton
                    placeholder="Select Event Source"
                    isInvalid={hookFormHasError({
                      errors,
                      name: "eventSource",
                    })}
                  />
                  <ListboxOptions>
                    <ListboxOption value="Optional 1">Option 1</ListboxOption>
                  </ListboxOptions>
                </ListboxContent>

                <HookFormErrorMessage
                  errors={errors}
                  name="eventSource"
                  render={({ message }) => (
                    <ErrorMessage size="sm">{message}</ErrorMessage>
                  )}
                />
              </Listbox>
            )}
          />

          <Controller
            control={control}
            name="specificEvent"
            render={({ field: { value, onChange, ...field } }) => (
              <Listbox
                className="space-y-1.5"
                value={value}
                onChange={onChange}
              >
                <ListboxLabel className="text-gray-700" size="sm">
                  Specific Event
                </ListboxLabel>
                <HelperText size="sm">
                  A specific event from your event source.
                </HelperText>

                <ListboxContent>
                  <ListboxButton
                    placeholder="Select Specific Event"
                    isInvalid={hookFormHasError({
                      errors,
                      name: "specificEvent",
                    })}
                  />
                  <ListboxOptions>
                    <ListboxOption value="Optional 1">Option 1</ListboxOption>
                  </ListboxOptions>
                </ListboxContent>

                <HookFormErrorMessage
                  errors={errors}
                  name="specificEvent"
                  render={({ message }) => (
                    <ErrorMessage size="sm">{message}</ErrorMessage>
                  )}
                />
              </Listbox>
            )}
          />
        </div>
      </form>
    </>
  );
}
