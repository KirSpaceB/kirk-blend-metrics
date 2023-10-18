"use client";

import Link from "next/link";

import { CheckCircle, ChevronDown } from "@/components/icons";
import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
} from "@/components/ui";
import { useToggle } from "@/lib/hooks";

export default function ThirdTab() {
  const [show, { on }] = useToggle();

  return (
    <div className="border border-gray-200 bg-white p-6 shadow-xs">
      <h3 className="text-base font-semibold text-gray-900">
        Test Authentication
      </h3>
      <p className="text-sm text-gray-500">
        Before testing, make sure you have configured ALL required fields and
        completed each step.
      </p>

      {show && (
        <Alert className="mt-6" variant="success">
          <AlertIcon>
            <CheckCircle className="h-5 w-5 flex-none" />
          </AlertIcon>
          <AlertContent>
            <AlertTitle className="text-success-600">
              Test successful
            </AlertTitle>
            <AlertDescription className="text-gray-500">
              All required fields for each step have been filled out! All
              inputted data has also passed to the correct API endpoint(s) and
              is working as expected
            </AlertDescription>
            <Link
              className="mt-3 inline-flex items-center gap-x-2 text-sm font-semibold text-gray-500 hover:underline"
              href="#"
            >
              View data <ChevronDown />
            </Link>
          </AlertContent>
        </Alert>
      )}

      <div className="mt-6 flex justify-end">
        <Button onClick={on}>Test Authentication</Button>
      </div>
    </div>
  );
}
