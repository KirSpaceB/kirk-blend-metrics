"use client";

import * as React from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useForm, SubmitHandler, Controller, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ErrorMessage as HookFormErrorMessage } from "@hookform/error-message";

import {
  Button,
  Checkbox,
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  ErrorMessage,
  HelperText,
  IconButton,
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
  Textarea,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  buttonVariants,
} from "@/components/ui";
import {
  AlertCircle,
  ArrowLeft2,
  Eye,
  HelpCircle,
  Plus2,
  X2,
} from "@/components/icons";
import { hookFormHasError, isNull } from "@/lib/utils";
import { RemainCharacters } from "@/components/remain-characters";
import { openTab } from "@/lib/dom";

const schema = z.object({
  value: z.enum([
    "API-KEY",
    "OAUTH-V2",
    "SESSION-AUTH",
    "BASIC-AUTH",
    "DIGEST-AUTH",
  ]),
});

type FormState = z.infer<typeof schema>;

const formSchema = z.object({
  label: z.string().max(50, "Must contain at most 50 character(s)").optional(),
  key: z
    .string()
    .max(50, "Must contain at most 50 character(s)")
    .min(1, "Must contain at least 1 character(s)"),
  required: z.boolean(),
  type: z.enum(["string", "number"]).optional(),
  helpText: z
    .string()
    .max(200, "Must contain at most 200 character(s)")
    .optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function SecondTab() {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const {
    handleSubmit,
    control,
    formState: { isValid, errors },
  } = useForm<FormState>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      required: false,
    },
    mode: "onChange",
  });
  const [fields, setFields] = React.useState<FormValues[]>();
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const value = useWatch({ control, name: "value" });

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const onSubmit: SubmitHandler<FormState> = (variables) => {
    push("/integration/metrics/connect?tab=second&layout=next");
  };

  const onFormSubmit: SubmitHandler<FormValues> = (variables) => {
    setFields((prev) => {
      const prevState = prev || [];
      return [...prevState, variables];
    });
    closeDialog();
  };

  const layout = searchParams.get("layout");
  const previousLayout = layout === "previous" || isNull(layout);
  const nextLayout = layout === "next";

  return (
    <>
      {previousLayout && (
        <div className="border border-gray-200 bg-white p-6 shadow-xs">
          <h3 className="text-base font-semibold text-gray-900">
            Configure Your Authentication
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Authentication lets users prove their identity to your app and
            authorize access their data, using your API authentication scheme.
          </p>

          <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="text-sm font-medium leading-[16.94px] text-gray-900">
              Authentication Type
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Choose how you would like users to prove their identity to your
              app and authorize access to their data.
            </p>

            <Controller
              control={control}
              name="value"
              render={({ field: { onChange, ...props } }) => (
                <RadioGroup
                  className="mt-3 gap-y-3"
                  onValueChange={onChange}
                  {...props}
                >
                  <RadioGroupItemSelector size="sm" value="API-KEY">
                    <Label size="xs">API Key</Label>
                    <HelperText size="xs">
                      Use API Key authentication type if you simply need to
                      collect some information from your users and then include
                      that information, as it was entered by the user, when you
                      make an API request. Learn more.
                    </HelperText>
                  </RadioGroupItemSelector>
                  <RadioGroupItemSelector size="sm" value="OAUTH-V2">
                    <Label size="xs">OAuth v2</Label>
                    <HelperText size="xs">
                      Use the OAuth 2 authentication type if your API supports{" "}
                      <Link className="text-primary-500 underline" href="#">
                        OAuth 2 &quot;Authorization Code&quot; grant.
                      </Link>{" "}
                      When setting up a workflow, your user&apos;s browser will
                      be redirected to your site where you can authenticate
                      them. Your OAuth implementation will then return an access
                      token that your integration will use to authorize requests
                      to your API. If your API uses one of the other OAuth 2
                      grant types, Session auth or API Key authentication will
                      be a better fit.{" "}
                      <Link className="text-primary-500 underline" href="#">
                        Learn more
                      </Link>
                    </HelperText>
                  </RadioGroupItemSelector>
                  <RadioGroupItemSelector size="sm" value="SESSION-AUTH">
                    <Label size="xs">Session Auth</Label>
                    <HelperText size="xs">
                      Use the session authentication type if you need to collect
                      some information from your users, for example a user name
                      and password, and then make a request to your API to
                      exchange that information for a token or session key,
                      which you will use to authorize subsequent API requests.
                      We will handle refreshing this token automatically each
                      time it expires.{" "}
                      <Link className="text-primary-500 underline" href="#">
                        Learn more
                      </Link>
                    </HelperText>
                  </RadioGroupItemSelector>
                  <RadioGroupItemSelector size="sm" value="BASIC-AUTH">
                    <Label size="xs">Basic Auth</Label>
                    <HelperText size="xs">
                      Use the basic authentication type if your API relies on
                      the{" "}
                      <Link className="text-primary-500 underline" href="#">
                        HTTP “Basic” Authentication standard.
                      </Link>{" "}
                      When your user sets up a new workflow, we will prompt them
                      for a username and password, then automatically add the
                      appropriate encoded authorization headers to your API
                      requests for you.{" "}
                      <Link className="text-primary-500 underline" href="#">
                        Learn more
                      </Link>
                    </HelperText>
                  </RadioGroupItemSelector>
                  <RadioGroupItemSelector size="sm" value="DIGEST-AUTH">
                    <Label size="xs">Digest Auth</Label>
                    <HelperText size="xs">
                      Use the digest authentication type if your API uses the{" "}
                      <Link className="text-primary-500 underline" href="#">
                        HTTP Digest Access Authentication standard
                      </Link>{" "}
                      to authenticate requests. When your user sets up a new
                      workflow, we will prompt them for a username and password,
                      handle the cryptographic interaction with your server, and
                      automatically add the appropriate encoded authorization
                      headers to your API requests for you.{" "}
                      <Link className="text-primary-500 underline" href="#">
                        Learn more
                      </Link>
                    </HelperText>
                  </RadioGroupItemSelector>
                </RadioGroup>
              )}
            />

            <HookFormErrorMessage
              errors={errors}
              name="value"
              render={({ message }) => (
                <ErrorMessage className="mt-1.5" size="sm">
                  {message}
                </ErrorMessage>
              )}
            />

            <div className="mt-6 flex justify-end">
              <Button type="submit" disabled={!isValid}>
                Save & Continue
              </Button>
            </div>
          </form>
        </div>
      )}

      {nextLayout && (
        <>
          {!fields ? (
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-xs">
              <h3 className="text-base font-semibold text-gray-900">API Key</h3>
              <p className="mt-1 text-sm text-gray-500">
                API Key Auth lets you build a form to request an API key, along
                with any additional fields your API requires for authentication.
                Zapier then passes the data users enter in those fields with
                every API call.{" "}
                <Link
                  className="text-primary-500 underline focus-visible:outline-none"
                  href="#"
                >
                  Learn more
                </Link>
              </p>
              <div className="mt-6 space-y-2">
                <h3 className="text-sm font-medium leading-[16.94px] text-gray-900">
                  Authentication Fields
                </h3>
                <p className="text-sm text-gray-500">
                  Build a form with fields for each item your API requires for
                  authentication, including a field for your API key and
                  additional field for any other data needed. Blend Metrics does
                  not include any fields by default.{" "}
                  <span className="font-bold">
                    You must define at least one field where your users can
                    enter API credentials.
                  </span>
                </p>
              </div>

              <Button
                className="mt-6"
                onClick={openDialog}
                visual="gray"
                variant="outlined"
              >
                <Plus2 />
                Add fields
              </Button>

              <div className="mt-[310px] flex justify-end">
                <Button disabled>Save & Continue</Button>
              </div>
            </div>
          ) : (
            <>
              <div className="flex items-start gap-x-3">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        className="focus-visible:outline-none"
                        href="/integration/metrics/connect?tab=second&layout=previous"
                      >
                        <ArrowLeft2 className="h-[18px] w-[18px] text-gray-500" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>Back</TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <div className="space-y-1">
                  <h2 className="text-base font-semibold text-gray-900">
                    API Key
                  </h2>
                  <p className="text-sm text-gray-500">
                    API Key Auth lets you build a form to request an API key,
                    along with any additional fields your API requires for
                    authentication. Blend Metrics then passes the data users
                    enter in those fields with every API call. Learn more
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-lg border border-gray-200 bg-white p-6 shadow-xs">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium leading-[16.94px] text-gray-900">
                    Authentication Fields
                  </h3>
                  <p className="text-sm text-gray-500">
                    Build a form with fields for each item your API requires for
                    authentication, including a field for your API key and
                    additional field for any other data needed. Blend Metrics
                    does not include any fields by default.{" "}
                    <span className="font-bold">
                      You must define at least one field where your users can
                      enter API credentials.
                    </span>
                  </p>
                </div>

                <div className="mt-6">
                  <table className="w-full table-fixed border-separate border-spacing-0 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-thumb-rounded-lg">
                    <thead>
                      <tr>
                        <th className="border-y border-gray-200 bg-gray-50 px-6 py-3 first:rounded-tl-lg first:border-l last:rounded-tr-lg last:border-r">
                          <div className="flex items-center gap-x-1">
                            <span className="text-xs font-medium leading-[18px] text-gray-600">
                              Label
                            </span>
                            <HelpCircle className="text-gray-400" />
                          </div>
                        </th>
                        <th className="border-y border-gray-200 bg-gray-50 px-6 py-3 first:rounded-tl-lg first:border-l last:rounded-tr-lg last:border-r">
                          <div className="flex items-center gap-x-1">
                            <span className="text-xs font-medium leading-[18px] text-gray-600">
                              Key
                            </span>
                            <HelpCircle className="text-gray-400" />
                          </div>
                        </th>
                        <th className="border-y border-gray-200 bg-gray-50 px-6 py-3 first:rounded-tl-lg first:border-l last:rounded-tr-lg last:border-r">
                          <div className="flex items-center gap-x-1">
                            <span className="text-xs font-medium leading-[18px] text-gray-600">
                              Type
                            </span>
                          </div>
                        </th>
                        <th className="border-y border-gray-200 bg-gray-50 px-6 py-3 first:rounded-tl-lg first:border-l last:rounded-tr-lg last:border-r">
                          <div className="flex items-center gap-x-1">
                            <span className="text-xs font-medium leading-[18px] text-gray-600">
                              Required
                            </span>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {fields.map(({ label, key, type, required }, index) => (
                        <tr
                          className="last:[&>td]:last:rounded-br-lg first:[&>td]:last:rounded-bl-lg"
                          key={index}
                        >
                          <td className="truncate border-b border-gray-200 px-6 py-4 text-sm text-gray-600 first:border-l last:border-r">
                            {label}
                          </td>
                          <td className="truncate border-b border-gray-200 px-6 py-4 text-sm text-gray-600 first:border-l last:border-r">
                            {key}
                          </td>
                          <td className="truncate border-b border-gray-200 px-6 py-4 text-sm text-gray-600 first:border-l last:border-r">
                            {type}
                          </td>
                          <td className="truncate border-b border-gray-200 px-6 py-4 text-sm text-gray-600 first:border-l last:border-r">
                            {required ? "Yes" : "No"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <div className="mt-6 flex items-center gap-x-5">
                    <Button
                      visual="gray"
                      onClick={openDialog}
                      variant="outlined"
                    >
                      <Plus2 className="h-[15px] w-[15px]" />
                      Add field
                    </Button>

                    {value ? (
                      <Button
                        variant="link"
                        onClick={() => openTab(`/auth?type=${value}`)}
                      >
                        <Eye />
                        Preview
                      </Button>
                    ) : (
                      <Button variant="link">
                        <Eye />
                        Preview
                      </Button>
                    )}
                  </div>

                  <div className="mt-[108px] flex justify-end">
                    <Button
                      onClick={() =>
                        push("/integration/metrics/connect?tab=third")
                      }
                    >
                      Save & Continue
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent className="max-w-[726px]">
              <DialogHeader className="flex-row items-center justify-between">
                <DialogTitle className="text-gray-900">Add field</DialogTitle>
                <DialogClose asChild>
                  <IconButton className="h-6 w-6" visual="gray" variant="ghost">
                    <X2 className="h-6 w-6 text-gray-500" />
                  </IconButton>
                </DialogClose>
              </DialogHeader>

              <form className="mt-8" onSubmit={form.handleSubmit(onFormSubmit)}>
                <div className="space-y-1.5">
                  <Label className="text-gray-700" size="sm" htmlFor="label">
                    Label <span className="text-gray-500">(optional)</span>
                  </Label>

                  <div className="flex items-start justify-between gap-x-3">
                    <HelperText size="sm">
                      Enter a user friendly name for this field that describes
                      what to enter.
                    </HelperText>

                    <HelperText className="leading-5">
                      <RemainCharacters
                        control={form.control}
                        name="label"
                        max={50}
                      />
                    </HelperText>
                  </div>

                  <InputGroup>
                    <Input
                      {...form.register("label")}
                      id="label"
                      isInvalid={hookFormHasError({
                        errors: form.formState.errors,
                        name: "label",
                      })}
                    />
                    <InputRightElement>
                      {hookFormHasError({
                        errors: form.formState.errors,
                        name: "label",
                      }) && <AlertCircle className="text-error-500" />}
                    </InputRightElement>
                  </InputGroup>

                  <HookFormErrorMessage
                    errors={form.formState.errors}
                    name="label"
                    render={({ message }) => (
                      <ErrorMessage size="sm">{message}</ErrorMessage>
                    )}
                  />
                </div>

                <div className="mt-6 space-y-1.5">
                  <Label className="text-gray-700" size="sm" htmlFor="key">
                    Key
                  </Label>

                  <div className="flex items-start justify-between">
                    <HelperText size="sm">
                      Add the field key, for example:{" "}
                      <span className="font-bold text-gray-500">api_key.</span>
                    </HelperText>

                    <HelperText className="leading-5">
                      <RemainCharacters
                        control={form.control}
                        name="key"
                        max={50}
                      />
                    </HelperText>
                  </div>

                  <InputGroup>
                    <Input
                      {...form.register("key")}
                      id="key"
                      isInvalid={hookFormHasError({
                        errors: form.formState.errors,
                        name: "key",
                      })}
                    />

                    <InputRightElement>
                      {hookFormHasError({
                        errors: form.formState.errors,
                        name: "key",
                      }) && <AlertCircle className="text-error-500" />}
                    </InputRightElement>
                  </InputGroup>

                  <HookFormErrorMessage
                    errors={form.formState.errors}
                    name="key"
                    render={({ message }) => (
                      <ErrorMessage size="sm">{message}</ErrorMessage>
                    )}
                  />
                </div>

                <div className="mt-6 space-y-1.5">
                  <div className="flex gap-x-3">
                    <Controller
                      control={form.control}
                      name="required"
                      render={({ field: { onChange, value, ...field } }) => (
                        <Checkbox
                          size="md"
                          id="checkbox"
                          checked={value}
                          onCheckedChange={onChange}
                          {...field}
                        />
                      )}
                    />
                    <Label
                      className="text-gray-700"
                      htmlFor="checkbox"
                      size="sm"
                    >
                      Is this field required? Check if yes.
                    </Label>
                  </div>

                  <HookFormErrorMessage
                    errors={form.formState.errors}
                    name="required"
                    render={({ message }) => (
                      <ErrorMessage size="sm">{message}</ErrorMessage>
                    )}
                  />
                </div>

                <Controller
                  control={form.control}
                  name="type"
                  render={({ field: { onChange, value, ...field } }) => (
                    <Listbox
                      className="mt-6 space-y-1.5"
                      onChange={onChange}
                      value={value}
                    >
                      <ListboxLabel className="text-gray-700" size="sm">
                        Type <span className="text-gray-500">(optional)</span>
                      </ListboxLabel>

                      <HelperText size="sm">Select API Endpoint</HelperText>

                      <ListboxContent>
                        <ListboxButton
                          placeholder="Choose field type"
                          isInvalid={hookFormHasError({
                            errors: form.formState.errors,
                            name: "type",
                          })}
                        />

                        <ListboxOptions>
                          <ListboxOption
                            className="px-3.5 text-sm font-medium text-gray-800"
                            value="string"
                          >
                            string
                          </ListboxOption>
                          <ListboxOption
                            className="px-3.5 text-sm font-medium text-gray-800"
                            value="number"
                          >
                            number
                          </ListboxOption>
                        </ListboxOptions>
                      </ListboxContent>

                      <HookFormErrorMessage
                        errors={form.formState.errors}
                        name="type"
                        render={({ message }) => (
                          <ErrorMessage size="sm">{message}</ErrorMessage>
                        )}
                      />
                    </Listbox>
                  )}
                />

                <div className="mt-6 space-y-1.5">
                  <Label
                    className="text-gray-700"
                    size="sm"
                    htmlFor="help-text"
                  >
                    Help text <span className="text-gray-500">(optional)</span>
                  </Label>

                  <div className="flex items-start justify-between gap-x-3">
                    <HelperText size="sm">
                      Explain to users what to include in this field, especially
                      for API keys and other hard to find info. Include
                      directions to find the data and links to your app settings
                      or help docs.
                    </HelperText>

                    <HelperText className="leading-5">
                      <RemainCharacters
                        control={form.control}
                        name="helpText"
                        max={200}
                      />
                    </HelperText>
                  </div>

                  <Textarea
                    className="h-[82px]"
                    {...form.register("helpText")}
                    id="help-text"
                    placeholder="This will be the help text user see in our marketplace..."
                    isInvalid={hookFormHasError({
                      errors: form.formState.errors,
                      name: "helpText",
                    })}
                  />

                  <HookFormErrorMessage
                    errors={form.formState.errors}
                    name="helpText"
                    render={({ message }) => (
                      <ErrorMessage size="sm">{message}</ErrorMessage>
                    )}
                  />
                </div>

                <div className="mt-11 flex justify-end">
                  <Button disabled={!form.formState.isValid}>Add field</Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </>
      )}
    </>
  );
}
