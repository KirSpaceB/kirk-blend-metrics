import React, { ChangeEvent } from "react";
//Font
import { Inter } from "next/font/google";

// Design System Components
import { Label } from "./label";
import { Button } from "./button";
import { Textarea } from "./textarea";

//Icons
import { InfoGray } from "../icons";
import { Link2 } from "../icons";
import { Plus2 } from "../icons";
import { Settings } from "../icons";
import { Minus } from "../icons";

//State
import { useState } from "react";

import { AvatarProps } from "@radix-ui/react-avatar";
import Invites from "./invites";

export interface IAvatarItem {
  email: string;
  image: React.ForwardRefExoticComponent<
    AvatarProps & React.RefAttributes<HTMLSpanElement>
  >;
}

const inter = Inter({ subsets: ["latin"] });

export default function ShareWindow() {
  // State for Input Value
  const [renderInvites, setRenderInvites] = useState(false);
  const [inputVal, setInputVal] = useState("");

  // State for rendering textbox
  const [renderTextBox, setRenderTextBox] = useState(false);

  // Event handlers for rendering Invites
  const handleInputClick = () => {
    setRenderInvites(true);
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  };
  // Event handlers for rendering Textbox
  const handleRenderTextBox = () => {
    if (renderTextBox == true) {
      setRenderTextBox(false);
    }
    if (renderTextBox == false) {
      setRenderTextBox(true);
    }
  };

  return (
    <div className={inter.className}>
      <div
        id="Modal"
        className="flex w-[690px] flex-shrink-0 flex-col items-center gap-8 rounded-lg bg-white p-5 shadow-xl"
      >
        <div
          id="Frame"
          className="flex items-center justify-between self-stretch"
        >
          <h1 className="text-lg font-semibold text-[#1D2939]">
            Share "File/Folder name
          </h1>
          <div className="flex items-start gap-4">
            <InfoGray className="h-6 w-6" />
            <Settings className="h-6 w-6 text-gray-500" />
          </div>
        </div>

        <div
          id="Content"
          className="flex flex-col items-start gap-6 self-stretch"
        >
          <div
            id="Fields"
            className="flex flex-col items-start gap-6 self-stretch"
          >
            <div id="Frame" className="flex items-end gap-3 self-stretch">
              <div
                id="Input field"
                className="flex h-auto w-full flex-col items-start gap-2 self-stretch"
              >
                <Label htmlFor="email" size="sm">
                  Share with Email
                </Label>
                <input
                  className="bg-black text-white"
                  onChange={handleInputChange}
                />
              </div>

              <Button
                variant="light"
                className="flex h-auto w-auto items-center justify-center gap-2 rounded-md px-5 py-3 opacity-50"
                onClick={handleInputClick}
              >
                Add
              </Button>
            </div>

            <Button
              variant="link"
              visual="gray"
              className="p-0 text-base font-semibold text-gray-700"
              id="_Button base"
              onClick={handleRenderTextBox}
              rightIcon={
                renderTextBox ? (
                  <Minus className="h-6 w-6" />
                ) : (
                  <Plus2 className="h-6 w-6" />
                )
              }
            >
              Add a Message
            </Button>
            {renderTextBox ? <Textarea placeholder="Write a message" /> : null}

            {renderInvites ? <Invites inputVal={inputVal} /> : null}
          </div>
        </div>

        <div
          id="_Modal actions"
          className="flex items-center justify-between self-stretch"
        >
          <Button leftIcon={<Link2 />} size="xl" variant="link" className="p-0">
            Copy Link
          </Button>

          <div id="Frame" className="flex items-start gap-3">
            <Button variant="outlined" visual="gray" size="sm">
              Cancel
            </Button>

            <Button size="sm" className="">
              Send Invite
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
