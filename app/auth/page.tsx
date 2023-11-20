"use client";

import { notFound, useSearchParams } from "next/navigation";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage as HookFromErrorMessage } from "@hookform/error-message";

import {
  AlertCircle,
  ArrowRightLeft,
  Email,
  Eye,
  EyeOff,
  Gmail,
  Logo,
} from "@/components/icons";
import {
  Button,
  ButtonGroup,
  ErrorMessage,
  HelperText,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Label,
  buttonVariants,
} from "@/components/ui";
import { useToggle } from "@/lib/hooks";
import { hookFormHasError } from "@/lib/utils";

const ApiKeyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<{
    email: string;
    key: string;
  }>({
    resolver: zodResolver(
      z.object({
        email: z.string().email(),
        key: z.string().min(1, "Must contain at least 1 character(s)"),
      })
    ),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<{ email: string; key: string }> = (
    variables
  ) => {};

  return (
    <div className="mx-auto max-w-[404px] px-4 pt-[46px]">
      <div className="flex items-center justify-center gap-x-3">
        <Gmail className="flex-none" />
        <ArrowRightLeft className="h-5 w-5 flex-none text-gray-300" />
        <Logo className="h-8 w-8 flex-none text-primary-500" />
      </div>

      <div className="mt-6">
        <h1 className="text-center text-lg font-semibold text-gray-800">
          Log in and Authorize
        </h1>
        <p className="mt-2 text-center text-sm leading-[16.94px] text-gray-500">
          Log in to authorize your Gmail account to{" "}
          <span className="font-bold">Blend Metrics</span>
        </p>

        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-1.5">
            <Label className="text-gray-700" id="email" size="sm">
              Email
            </Label>
            <InputGroup>
              <InputLeftElement>
                <Email className="text-gray-500" />
              </InputLeftElement>
              <Input
                type="email"
                id="email"
                placeholder="olivia@untitledui.com"
                {...register("email")}
                isInvalid={hookFormHasError({
                  errors,
                  name: "email",
                })}
              />
              <InputRightElement>
                {hookFormHasError({ errors, name: "email" }) && (
                  <AlertCircle className="text-error-500" />
                )}
              </InputRightElement>
            </InputGroup>
            <HookFromErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => (
                <ErrorMessage size="sm">{message}</ErrorMessage>
              )}
            />
          </div>

          <div className="mt-5 space-y-1.5">
            <Label className="text-gray-700" id="api-key" size="sm">
              API Key
            </Label>

            <HelperText size="sm">
              Enter API key, located at{" "}
              <Link className="text-primary-500 underline" href="#">
                blendmetrics.com/account
              </Link>
            </HelperText>

            <InputGroup>
              <Input
                placeholder="e.g. bY2t8YgKQygnxWpQViwdBss4"
                type="text"
                id="api-key"
                isInvalid={hookFormHasError({
                  errors,
                  name: "key",
                })}
                {...register("key")}
              />

              <InputRightElement>
                {hookFormHasError({
                  errors,
                  name: "key",
                }) && <AlertCircle className="text-error-500" />}
              </InputRightElement>
            </InputGroup>
            <HookFromErrorMessage
              errors={errors}
              name="key"
              render={({ message }) => (
                <ErrorMessage size="sm">{message}</ErrorMessage>
              )}
            />
          </div>

          <ButtonGroup direction="horizontal" className="mt-5">
            <Link
              className={buttonVariants({
                variant: "outlined",
                visual: "gray",
              })}
              href="/integration/metrics/connect?tab=second&layout=next"
            >
              Cancel
            </Link>
            <Button disabled={!isValid}>Log In</Button>
          </ButtonGroup>
        </form>
      </div>
    </div>
  );
};

const Form = () => {
  const [show, { toggle }] = useToggle();
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<{
    username: string;
    password: string;
  }>({
    resolver: zodResolver(
      z.object({
        username: z.string().min(1, "Must contain at least 1 character(s)"),
        password: z.string().min(1, "Must contain at least 1 character(s)"),
      })
    ),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<{ username: string; password: string }> = (
    variables
  ) => {};

  return (
    <div className="mx-auto max-w-[404px] px-4 pt-[46px]">
      <div className="flex items-center justify-center gap-x-3">
        <Gmail className="flex-none" />
        <ArrowRightLeft className="h-5 w-5 flex-none text-gray-300" />
        <Logo className="h-8 w-8 flex-none text-primary-500" />
      </div>

      <div className="mt-6">
        <h1 className="text-center text-lg font-semibold text-gray-800">
          Log in and Authorize
        </h1>
        <p className="mt-2 text-center text-sm leading-[16.94px] text-gray-500">
          Log in to authorize your Gmail account to{" "}
          <span className="font-bold">Blend Metrics</span>
        </p>

        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-1.5">
            <Label className="text-gray-700" id="email" size="sm">
              Username
            </Label>
            <InputGroup>
              <Input
                type="text"
                id="email"
                placeholder="Enter your username"
                isInvalid={hookFormHasError({ errors, name: "username" })}
                {...register("username")}
              />
              <InputRightElement>
                {hookFormHasError({
                  errors,
                  name: "username",
                }) && <AlertCircle className="text-error-500" />}
              </InputRightElement>
            </InputGroup>
            <HookFromErrorMessage
              errors={errors}
              name="username"
              render={({ message }) => (
                <ErrorMessage size="sm">{message}</ErrorMessage>
              )}
            />
          </div>

          <div className="mt-5 space-y-1.5">
            <Label className="text-gray-700" id="password" size="sm">
              Password
            </Label>
            <InputGroup>
              <Input
                placeholder="Enter your password"
                type={show ? "text" : "password"}
                id="password"
                isInvalid={hookFormHasError({
                  errors,
                  name: "password",
                })}
                {...register("password")}
              />
              <InputRightElement>
                {hookFormHasError({
                  errors,
                  name: "password",
                }) ? (
                  <AlertCircle className="text-error-500" />
                ) : (
                  <button
                    className="focus-visible:outline-none"
                    onClick={toggle}
                    type="button"
                  >
                    {show ? (
                      <EyeOff className="h-5 w-5 text-gray-500" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                )}
              </InputRightElement>
            </InputGroup>

            <HookFromErrorMessage
              errors={errors}
              name="password"
              render={({ message }) => (
                <ErrorMessage size="sm">{message}</ErrorMessage>
              )}
            />
          </div>

          <ButtonGroup direction="horizontal" className="mt-5">
            <Link
              className={buttonVariants({
                variant: "outlined",
                visual: "gray",
              })}
              href="/integration/metrics/connect?tab=second&layout=next"
            >
              Cancel
            </Link>

            <Button disabled={!isValid}>Log In</Button>
          </ButtonGroup>
        </form>
      </div>
    </div>
  );
};

const schema = z.enum([
  "API-KEY",
  "OAUTH-V2",
  "SESSION-AUTH",
  "BASIC-AUTH",
  "DIGEST-AUTH",
]);

function Auth() {
  const searchParams = useSearchParams();

  const type = searchParams.get("type");
  const { success } = schema.safeParse(type);

  if (!success) {
    notFound();
  }

  return (
    <>
      {type === "API-KEY" && <ApiKeyForm />}

      {(type === "BASIC-AUTH" ||
        type === "SESSION-AUTH" ||
        type === "DIGEST-AUTH") && <Form />}
    </>
  );
}

export default Auth;
