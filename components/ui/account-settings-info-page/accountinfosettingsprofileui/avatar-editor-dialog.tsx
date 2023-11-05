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

  // Made Zoomin Zoomout margins pixel perfect
  // Removed focus on the Slider Thumb
  return (
    <Dialog open={isOpen}>
      <DialogContent className="max-w-[486px]">
        <DialogHeader className="max-w-[446px]">
          <div className="flex items-center justify-between">
            <Button leftIcon={<ArrowLeft />} variant="link">
              Back
            </Button>
            <h2 className="mr-[30px] text-lg font-semibold">
              Edit Profile Image
            </h2>
            <Button variant="link">
              <DialogClose>
                <X2 className="text-[#667085]" />
              </DialogClose>
            </Button>
          </div>
        </DialogHeader>

        <div className="mt-[15px]  flex items-center justify-center">
          <AvatarEditor
            image={profile.src}
            width={300}
            height={300}
            border={50}
            color={[55, 55, 55, 0.2]} // Grayscale RGBA
            scale={avatarScale}
            rotate={rotateControlState}
            borderRadius={9999}
          />
        </div>

        <div
          id="Slider"
          className="mb-[32px] ml-[12px] mr-[12px] mt-[32px] flex items-center justify-between"
        >
          <ZoomOut
            className="h-[24px] w-[24px] text-[#667085] opacity-90"
            onClick={handleZoomOut}
          />
          <AvatarEditorSlider
            avatarScale={avatarScale}
            setScale={setAvatarScale}
          />
          <ZoomIn
            className="h-[24px] w-[24px] text-[#667085] opacity-90"
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
