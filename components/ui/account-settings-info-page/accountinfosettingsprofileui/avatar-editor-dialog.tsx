import React, { useState, useContext } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogClose,
} from "../../dialog";
import { ArrowLeft } from "@/components/icons";
import { Button } from "../../button";
import CustomAvatarEditor from "./avatar-editor/avatar-editor";
import { CheckIcon } from "lucide-react";
import AvatarEditorSlider from "./avatar-editor-slider";
import { X1, ZoomIn } from "@blend-metrics/icons";
import { ZoomOut } from "@blend-metrics/icons";
import { RotateCw } from "@blend-metrics/icons";
import { IconButton } from "../../icon-button";
import { AvatarEditorImageContext } from "./avatar-editor/avatar-editor-image-context";
import AccountInfoSettingsProfile from "../account-info-settings-profile";

interface IRemovePhotoDialogProps {
  openDialog: boolean;
  send:(event: string) => void;
}

export default function AvatarEditorDialog({openDialog, send}:IRemovePhotoDialogProps) {
  const {imageVal, setImageVal} = useContext(AvatarEditorImageContext)
  console.log("image val in context", imageVal)

  const [rotateControlState, setRotateControlState] = useState(0);
  const [avatarScale, setAvatarScale] = useState(1.0);

  const handleRotate = () => {
    let newRotateControlState = rotateControlState + 90;
    if (newRotateControlState >= 360) {
      newRotateControlState = 0;
    }
    setRotateControlState(newRotateControlState);
    console.log(newRotateControlState);
  };

  const handleZoomIn = () => {
    setAvatarScale((prevScale) => Math.min(prevScale + 0.1, 2.0)); // Adjust max scale as needed
  };
  const handleZoomOut = () => {
    setAvatarScale((prevScale) => Math.max(prevScale - 0.1, 0.0)); // Adjust min scale as needed
  };

  const handleSaveClick = () => {
    // Update the imageVal here. Replace 'newImageURL.webp' with the actual new image URL.
    setImageVal('/defaultavatarprofile.webp');
    send("BACK_TO_INITIAL")    // Other actions to be performed on save, if any.
    console.log(imageVal)
  };



  // Update design system to use new button variant
  return (
    <>
      <AvatarEditorImageContext.Provider value={{imageVal, setImageVal}}>
        <AccountInfoSettingsProfile/>
        <Dialog open={openDialog}>
          <DialogContent className="min-h-[505px] max-w-[486px] gap-8 pb-[24px] pl-[24px] pr-[24px] pt-[24px]">
            <DialogHeader className="flex h-[38px] w-[446px] flex-row items-center justify-between">
              <div className="ml-1 flex h-[38px] w-[38px] items-center justify-center gap-2 p-[10px]">
                <Button
                  leftIcon={<ArrowLeft className="h-[16px] w-[16px]" />}
                  variant="link"
                  className="gap-1"
                  onClick={() => send("GO_TO_CHANGE_PROFILE_IMAGE")}
                >
                  Back
                </Button>
              </div>
              <h2 className="text-[18px] font-semibold leading-7">
                Edit Profile Image
              </h2>
              <div className="flex h-[38px] w-[38px] items-center justify-center gap-4 ">
                <Button variant="link">
                  <DialogClose asChild>
                    <IconButton
                      className="h-7 w-7 text-gray-500 hover:text-gray-900"
                      variant="ghost"
                      visual="gray"
                    >
                      <X1 className="h-[18px] w-[18px]" />
                    </IconButton>
                  </DialogClose>
                </Button>
              </div>
            </DialogHeader>

            <div className="mt-[15px] flex h-full w-full items-center justify-center">
              <div className="">
                <CustomAvatarEditor
                  rotate={rotateControlState}
                  scaleValue={avatarScale}
                  renderedImage={imageVal} // Pass the image file here if needed
                  shape="circle"
                />
              </div>
            </div>

            <div
              id="Slider"
              className="mb-[32px] mt-[32px] flex items-center justify-between"
            >
              <ZoomOut
                className="h-[24px] w-[24px] cursor-pointer text-[#667085] opacity-80 delay-300 hover:opacity-100"
                onClick={handleZoomOut}
              />
              <AvatarEditorSlider
                avatarScale={avatarScale}
                setScale={setAvatarScale}
              />
              <ZoomIn
                className="h-[24px] w-[24px] cursor-pointer text-[#667085] opacity-80 delay-300 hover:opacity-100"
                onClick={handleZoomIn}
              />
            </div>
            <DialogFooter className="mt-8 flex items-start justify-between">
              <Button
                leftIcon={<RotateCw className="h-[15px] w-[15px]" />}
                variant="outlined"
                visual="gray"
                onClick={handleRotate}
              >
                Rotate
              </Button>
              <div className="flex justify-center gap-3">
                <DialogClose asChild>
                  <Button variant="outlined" visual="gray">
                    Cancel
                  </Button>
                </DialogClose>
                <Button
                  leftIcon={<CheckIcon className="h-[15px] w-[15px]" />}
                  visual="primary"
                  onClick={handleSaveClick}
                >
                  Save
                </Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </AvatarEditorImageContext.Provider>

    </>
 
  );
}
