import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogClose,
} from "../dialog";
import { AvatarPencil } from "@/components/icons";
import { AlertTriangle } from "@/components/icons";
import { Button } from "../button";
// Context
import { useState, useContext } from "react";
import { AvatarEditorImageContext } from "./accountinfosettingsprofileui/avatar-editor/avatar-editor-image-context";

import ChangeProfileImage from "./accountinfosettingsprofileui/remove-photo-dialog-section";
import RemovePhotoDialogSection from "./accountinfosettingsprofileui/remove-photo-dialog-section";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import { Trash } from "@/components/icons";
import { ImageIcon } from "@/components/icons";
import ChangeProfileImageDialog from "./accountinfosettingsprofileui/change-profile-image-diaglog";
import AvatarEditorDialog from "./accountinfosettingsprofileui/avatar-editor-dialog";

interface IProfile {
  send:(event: string) => void;
}

export default function AccountInfoSettingsProfile({ send }: IProfile) {
  const { imageVal } = useContext(AvatarEditorImageContext);
  console.log(imageVal)

  return (
    <Dialog>
      <DialogTrigger
        asChild
        className="h-[96px] w-[96px] rounded-full border-[4px] border-[#FFF] bg-[#F2F4F7] hover:bg-[#F2F4F7]"
        
      >
        {/* We get a children issue */}
        {/* We can use fragments because the dialog trigger looks for a div */}
        {/* <AvatarPencil className="h-[30px] w-[30px] cursor-pointer rounded-full border-[1px] border-solid border-[#98A2B3] p-[6px] sm:absolute sm:left-[460px] sm:top-[300px]" /> */}
        <Button className="group bg-gray-100 text-[36px] font-medium text-[#D0D5DD] transition-all duration-300 ease-in-out hover:bg-gray-200 hover:text-gray-400">
          CT
          {/* <AvatarPencil className="absolute left-[455px] top-[305px] h-[30px] w-[30px] cursor-pointer rounded-full border border-gray-300 bg-white p-[6px]  group-hover:text-gray-700" /> */}
          <img src={imageVal} alt="" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <div className="flex flex-col items-center justify-center gap-5">
            <h1 className="text-[18px] font-semibold">
              Change Profile Image
            </h1>
            <Avatar className="h-[160px] w-[160px]">
              <AvatarImage alt="Man" />
              <AvatarFallback>
                <div className="text-[60px] font-medium text-[#D0D5DD] text-opacity-50">
                  CT
                </div>
              </AvatarFallback>
            </Avatar>
          </div>
        </DialogHeader>

        <DialogFooter className="mt-8">
          <DialogClose asChild>
            <Button
              variant="light"
              visual="error"
              leftIcon={<Trash />}
              onClick={() => send("REMOVE_PHOTO")}
            >
              Remove Photo
            </Button>
          </DialogClose>

          <DialogClose asChild>
            <Button
              variant="outlined"
              visual="gray"
              leftIcon={<ImageIcon width={17} height={17} />}
              onClick={() => send("CHANGE_PROFILE_IMAGE_DIALOG_FROM_INITAL")}
            >
              Change Profile Image
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
