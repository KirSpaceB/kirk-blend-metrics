import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "../../dialog";
import { ImageIcon } from "@/components/icons";
import { Button } from "../../button";
import { Avatar, AvatarFallback, AvatarImage } from "../../avatar";
import { SettingsAccountPersonalInfoCameraIcon } from "@/components/icons";
interface IDialogArgs {
  isOpen: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function RemovePhotoDialogSection({
  isOpen,
  onClose,
}: IDialogArgs) {
  return (
    <Dialog open={isOpen}>
      <DialogContent>
        <DialogHeader>
          <div className="flex flex-col items-center justify-center gap-5">
            <h1 className="text-[18px] font-semibold">Change Profile Image</h1>
            <Avatar className="h-[160px] w-[160px]">
              <AvatarImage id="Avatar Image" alt="Man" />
              {/* Bg red is not being applied because there is an already exsisting primary color  */}
              {/* Can't change the backgroundcolor because its hard set on primary-25 */}
              <AvatarFallback
                id="AvatarFallBack"
                className=" rounded-full bg-red-500 "
              >
                <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full bg-gray-200">
                  <SettingsAccountPersonalInfoCameraIcon className="h-[50px] w-[50px]" />
                </div>
              </AvatarFallback>
            </Avatar>
          </div>
        </DialogHeader>

        <DialogFooter className="mt-8 flex justify-center">
          <DialogClose asChild>
            <Button
              variant="outlined"
              visual="gray"
              leftIcon={<ImageIcon />}
              // className="h-[36px] w-[171px] pb-2 pl-[14px] pr-[14px] pt-2"
            >
              Change Profile Image
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
