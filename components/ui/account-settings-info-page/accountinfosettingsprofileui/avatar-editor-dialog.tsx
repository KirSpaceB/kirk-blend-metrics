import React, { ReactNode, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogClose,
} from "../../dialog";
import { ArrowLeft, Refresh } from "@/components/icons";
import { Button } from "../../button";
import AvatarEditor from "react-avatar-editor";
import sac from "./sacramento_california.jpeg";
import profile from "./profile_pic.png";

import { CheckIcon } from "lucide-react";
import AvatarEditorSlider from "./avatar-editor-slider";
import { ZoomIn } from "@blend-metrics/icons";
import { ZoomOut } from "@blend-metrics/icons";
import { X2 } from "@/components/icons";
import { RotateCw } from "@blend-metrics/icons";
interface IDialogArgs {
  isOpen: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AvatarEditorDialog({ isOpen, onClose }: IDialogArgs) {
  let rotateControl = 0;
  let [rotateControlState, setRotateControlState] = useState(0);
  const handleRotate = () => {
    // rotateControlState += 90;
    // if (rotateControlState === 450) {
    //   setRotateControlState(0);
    // }
    // console.log(rotateControlState);
    let newRotateControlState = rotateControlState + 90;
    if (newRotateControlState >= 360) {
      newRotateControlState = 0;
    }
    setRotateControlState(newRotateControlState);
    console.log(newRotateControlState);
  };

  // New state for scale
  const [avatarScale, setAvatarScale] = useState(1.0);

  // Increase and decrease handlers for the AvatarEditor scale
  const handleZoomIn = () => {
    setAvatarScale((prevScale) => Math.min(prevScale + 0.1, 2.0)); // Max scale = 3.0 as an example
  };
  const handleZoomOut = () => {
    setAvatarScale((prevScale) => Math.max(prevScale - 0.1, 0)); // Min scale = 0.5 as an example
  };

  // Update design system to use new button variant
  return (
    <Dialog open={isOpen}>
      <DialogContent className="min-h-[505px] max-w-[486px] gap-8 pb-[24px] pl-[24px] pr-[24px] pt-[24px]">
        <DialogHeader className="flex h-[38px] w-[446px] flex-row items-center justify-between">
          <div className="ml-1 flex h-[38px] w-[38px] items-center justify-center gap-2 p-[10px]">
            <Button
              leftIcon={<ArrowLeft className="h-[16px] w-[16px]" />}
              variant="link"
              className="gap-1"
            >
              Back
            </Button>
          </div>
          <h2 className="text-[18px] font-semibold leading-7">
            Edit Profile Image
          </h2>
          <div className="flex h-[38px] w-[38px] items-center justify-center gap-4 ">
            <Button variant="link">
              <DialogClose className="transition-all delay-100 hover:bg-gray-200 hover:shadow-md">
                <X2 className="text-[#667085]" />
              </DialogClose>
            </Button>
          </div>
        </DialogHeader>

        <div className="mt-[15px] flex h-full w-full items-center justify-center">
          <div className="">
            <AvatarEditor
              image={profile.src}
              width={250}
              height={250}
              border={0} // Border applied around the image
              borderRadius={9999} // The border-radius to make the crop area a circle
              color={[55, 55, 55, 0.2]} // Grayscale RGBA
              scale={avatarScale}
              rotate={rotateControlState}
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
            >
              Save
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
