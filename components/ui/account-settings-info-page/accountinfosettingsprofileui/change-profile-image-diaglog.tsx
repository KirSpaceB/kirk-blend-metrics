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
import { Avatar, AvatarFallback } from "../../avatar";
import { Dropzone } from "../../dropzone";

interface IRemovePhotoDialogProps {
  openDialog: boolean;
  send:(event: string) => void;
}


export default function ChangeProfileImageDialog({openDialog,send}: IRemovePhotoDialogProps) {
  return (
    <>
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <div className="flex flex-col items-center justify-center gap-8">
              <h1 className="text-[18px] font-semibold">Change Profile Image</h1>
              <Avatar className="h-[160px] w-[160px]">
                {/* <AvatarImage alt="Man" /> We dont need this for now */}
                <AvatarFallback>
                  <div className="text-[60px] font-medium text-[#D0D5DD] text-opacity-50">
                    CT
                  </div>
                </AvatarFallback>
              </Avatar>
            </div>
            <div
              onClick={() => send("CUSTOM_AVATAR_EDITOR")}
              className="cursor-pointer"
            >
              <Dropzone />
            </div>
            <div className="flex items-center justify-center gap-[9px]">
              <div className="h-[1px] w-[193.5px] bg-[#E1E6EA] "></div>
              <div className="text-[12px] font-medium text-[#939DA7]">Or</div>
              <div className="h-[1px] w-[193.5px]  bg-[#E1E6EA] "></div>
            </div>
          </DialogHeader>

          <DialogFooter className="mt-8 flex justify-center">
            <DialogClose asChild>
              <Button
                variant="outlined"
                visual="gray"
                leftIcon={<ImageIcon className="flex justify-center items-center mt-[1px]" />}
                className="w-[400px]"
                onClick={() => send("CUSTOM_AVATAR_EDITOR")}
              >
                Import From Media Library
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  
  );
}
