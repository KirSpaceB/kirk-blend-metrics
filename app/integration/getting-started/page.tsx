"use client";

import { CheckIcon } from "lucide-react";

import { CheckCircle, PlayCircle, AlertCircle } from "@/components/icons";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  CloseButton,
  DisclosureContent,
} from "@/components/ui";

function GettingStarted() {
  return (
    <div className="px-[88px] py-8">
      <Alert variant="primary">
        <AlertIcon>
          <AlertCircle className="h-5 w-5" />
        </AlertIcon>
        <AlertContent>
          <AlertTitle className="text-gray-700">
            Getting Started with Integration
          </AlertTitle>
          <AlertDescription className="text-gray-500">
            Use this personalized guide to build your integration.
          </AlertDescription>
        </AlertContent>
        <CloseButton />
      </Alert>

      <div className="mt-6 rounded-lg border border-gray-200 bg-white p-6 shadow-xs">
        <div className="flex gap-x-3">
          <CheckCircle className="mt-1 h-5 w-5 text-gray-400" />
          <div className="space-y-1">
            <h3 className="text-base font-semibold text-gray-900">
              Configure Integration
            </h3>
            <p className="text-sm text-gray-500">
              Provide the necessary details for their integration.
            </p>
          </div>
        </div>

        <Accordion
          type="single"
          collapsible
          defaultValue="General"
          className="mt-4"
        >
          <AccordionItem value="General">
            <AccordionTrigger className="flex w-full items-center gap-x-2 px-8 py-3 text-sm font-medium leading-[16.94px] text-gray-700 data-[state=open]:font-semibold data-[state=open]:text-gray-900">
              <CheckIcon className="h-[18px] w-[18px] text-gray-400" /> Add
              General Information
            </AccordionTrigger>
            <DisclosureContent className="px-14 pb-4 pt-3">
              <p className="text-sm leading-[18px] text-gray-700">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.Amet minim
                mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. Exercitation
                veniam consequat sunt nostrud amet.
              </p>
              <div className="mt-4 flex items-center gap-x-4">
                <Button>Add General Info</Button>
                <Button variant="link">
                  <PlayCircle />
                  Show me how
                </Button>
              </div>
            </DisclosureContent>
          </AccordionItem>

          <AccordionItem value="Setup">
            <AccordionTrigger className="flex w-full items-center gap-x-2 px-8 py-3 text-sm font-medium leading-[16.94px] text-gray-700 data-[state=open]:font-semibold data-[state=open]:text-gray-900">
              <CheckIcon className="h-[18px] w-[18px] text-gray-400" /> Add
              Setup Metrics
            </AccordionTrigger>
            <DisclosureContent className="px-14 pb-4 pt-3">
              <p className="text-sm leading-[18px] text-gray-700">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.Amet minim
                mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. Exercitation
                veniam consequat sunt nostrud amet.
              </p>
              <div className="mt-4 flex items-center gap-x-4">
                <Button>Setup Metrics</Button>
                <Button variant="link">
                  <PlayCircle />
                  Show me how
                </Button>
              </div>
            </DisclosureContent>
          </AccordionItem>

          <AccordionItem value="Triggers">
            <AccordionTrigger className="flex w-full items-center gap-x-2 px-8 py-3 text-sm font-medium leading-[16.94px] text-gray-700 data-[state=open]:font-semibold data-[state=open]:text-gray-900">
              <CheckIcon className="h-[18px] w-[18px] text-gray-400" />
              Add Triggers
            </AccordionTrigger>
            <DisclosureContent className="px-14 pb-4 pt-3">
              <p className="text-sm leading-[18px] text-gray-700">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.Amet minim
                mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. Exercitation
                veniam consequat sunt nostrud amet.
              </p>
              <div className="mt-4 flex items-center gap-x-4">
                <Button>Add Triggers</Button>
                <Button variant="link">
                  <PlayCircle />
                  Show me how
                </Button>
              </div>
            </DisclosureContent>
          </AccordionItem>

          <AccordionItem value="Actions">
            <AccordionTrigger className="flex w-full items-center gap-x-2 px-8 py-3 text-sm font-medium leading-[16.94px] text-gray-700 data-[state=open]:font-semibold data-[state=open]:text-gray-900">
              <CheckIcon className="h-[18px] w-[18px] text-gray-400" />
              Add Actions
            </AccordionTrigger>
            <DisclosureContent className="px-14 pb-4 pt-3">
              <p className="text-sm leading-[18px] text-gray-700">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.Amet minim
                mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. Exercitation
                veniam consequat sunt nostrud amet.
              </p>
              <div className="mt-4 flex items-center gap-x-4">
                <Button>Add Actions</Button>
                <Button variant="link">
                  <PlayCircle />
                  Show me how
                </Button>
              </div>
            </DisclosureContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="mt-6 rounded-lg border border-gray-200 bg-white p-6 shadow-xs">
        <div className="flex gap-x-3">
          <CheckCircle className="mt-1 h-5 w-5 text-gray-400" />
          <div className="space-y-1">
            <h3 className="text-base font-semibold text-gray-900">
              Test Integration
            </h3>
            <p className="text-sm text-gray-500">
              Test an integration to ensure that it is working as intended and
              to avoid potential issues for end-users.
            </p>
          </div>
        </div>

        <Accordion
          type="single"
          collapsible
          defaultValue="Test"
          className="mt-4"
        >
          <AccordionItem value="Test">
            <AccordionTrigger className="flex w-full items-center gap-x-2 px-8 py-3 text-sm font-medium leading-[16.94px] text-gray-700 data-[state=open]:font-semibold data-[state=open]:text-gray-900">
              <CheckIcon className="h-[18px] w-[18px] text-gray-400" /> Add Test
            </AccordionTrigger>
            <DisclosureContent className="px-14 pb-4 pt-3">
              <p className="text-sm leading-[18px] text-gray-700">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.Amet minim
                mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. Exercitation
                veniam consequat sunt nostrud amet.
              </p>
              <div className="mt-4 flex items-center gap-x-4">
                <Button>Test Integration</Button>
                <Button variant="link">
                  <PlayCircle />
                  Show me how
                </Button>
              </div>
            </DisclosureContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="mt-6 rounded-lg border border-gray-200 bg-white p-6 shadow-xs">
        <div className="flex gap-x-3">
          <CheckCircle className="mt-1 h-5 w-5 text-gray-400" />
          <div className="space-y-1">
            <h3 className="text-base font-semibold text-gray-900">
              Publish Integration
            </h3>
            <p className="text-sm text-gray-500">
              Submit your integration to our marketplace.
            </p>
          </div>
        </div>

        <Accordion
          type="single"
          collapsible
          defaultValue="Publish"
          className="mt-4"
        >
          <AccordionItem value="Publish">
            <AccordionTrigger className="flex w-full items-center gap-x-2 px-8 py-3 text-sm font-medium leading-[16.94px] text-gray-700 data-[state=open]:font-semibold data-[state=open]:text-gray-900">
              <CheckIcon className="h-[18px] w-[18px] text-gray-400" />
              Publish
            </AccordionTrigger>
            <DisclosureContent className="px-14 pb-4 pt-3">
              <p className="text-sm leading-[18px] text-gray-700">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.Amet minim
                mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. Exercitation
                veniam consequat sunt nostrud amet.
              </p>
              <div className="mt-4 flex items-center gap-x-4">
                <Button>Publish Integration</Button>
                <Button variant="link">
                  <PlayCircle />
                  Show me how
                </Button>
              </div>
            </DisclosureContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default GettingStarted;
