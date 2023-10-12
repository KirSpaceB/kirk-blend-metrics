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
import { AlertTriangle, ImageIcon } from "@/components/icons";
import { Button } from "../../button";
import { Avatar, AvatarFallback, AvatarImage } from "../../avatar";

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
              <AvatarImage alt="Man" />
              <AvatarFallback className="text-[#D0D5DD] opacity-0">
                CT
              </AvatarFallback>
            </Avatar>
          </div>
        </DialogHeader>

        <DialogFooter className="mt-8 flex justify-center">
          <DialogClose asChild>
            <Button variant="outlined" visual="gray" leftIcon={<ImageIcon />}>
              Change Profile Image
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
