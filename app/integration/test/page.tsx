"use client";

import Link from "next/link";

import { AlertCircle } from "@/components/icons";
import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  CloseButton,
} from "@/components/ui";

function Test() {
  return (
    <div className="px-[88px] py-8">
      <Alert variant="primary">
        <AlertIcon>
          <AlertCircle className="h-5 w-5" />
        </AlertIcon>
        <AlertContent>
          <AlertTitle className="text-gray-700">Test</AlertTitle>
          <AlertDescription className="text-gray-700">
            In this section, you can test an integration before publishing it to
            the marketplace. It is crucial to ensure that it is working as
            intended and to avoid potential issues for end-users.
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

      <div className="mt-6 flex items-center justify-between">
        <div className="space-y-1">
          <h3 className="text-base font-semibold text-gray-600">Test</h3>
          <p className="text-sm">
            Before testing, make sure you have configured ALL required fields
            and completed each step.
          </p>
        </div>

        <Button>Test Integration</Button>
      </div>
    </div>
  );
}

export default Test;
