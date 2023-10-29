import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogClose,
} from "../../dialog";
import { ImageIcon } from "@/components/icons";
import { Button } from "../../button";
import { Avatar, AvatarFallback, AvatarImage } from "../../avatar";
import { Dropzone } from "../../dropzone";
import AvatarEditor from "react-avatar-editor";
interface IDialogArgs {
  isOpen: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AvatarEditorDialog({ isOpen, onClose }: IDialogArgs) {
  return (
    <Dialog open={isOpen}>
      <DialogContent>
        <DialogHeader>
          <div className="flex flex-col items-center justify-center gap-8">
            <h1 className="text-[18px] font-semibold">Change Profile Image</h1>
            {/* This is where the canvas should be */}
            <AvatarEditor
              image={"./sacramento_california.jpeg"}
              width={250}
              height={250}
              border={50}
              color={[255, 255, 255, 0.6]} // RGBA
              scale={1.2}
              rotate={0}
            />

            {/* <Avatar className="h-[160px] w-[160px]">
              <AvatarImage alt="Man" /> We dont need this for now
              <AvatarFallback>
                <div className="text-[60px] font-medium text-[#D0D5DD] text-opacity-50">
                  CT
                </div>
              </AvatarFallback>
            </Avatar> */}
          </div>
        </DialogHeader>

        <DialogFooter className="mt-8 flex justify-center">
          <DialogClose asChild>
            <Button
              variant="outlined"
              visual="gray"
              leftIcon={<ImageIcon />}
              className="w-[419px]"
            >
              Change Profile Image
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
