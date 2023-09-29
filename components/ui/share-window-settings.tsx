import React, { Dispatch, SetStateAction } from "react";
import { InfoGray } from "../icons";
interface IShareWindowSettingsProps {
  backButtonClickHandlerProp?: Dispatch<SetStateAction<boolean>>;
}

export default function ShareWindowSettings({
  backButtonClickHandlerProp,
}: IShareWindowSettingsProps) {
  const backButtonHandler = () => {
    backButtonClickHandlerProp(false);
  };
  return (
    <div>
      <button
        className="h-[50px] w-[100px] bg-red-500"
        onClick={backButtonHandler}
      >
        Click me to go back to the container
      </button>
      <div
        id="Share-Window-Settings-Frame-Container"
        className="g-[32px]  flex h-[716px] w-[690px] shrink-0 flex-col items-start rounded-xl p-[24px] shadow-xl"
      >
        <div
          id="Settings Nav Container"
          className="flex flex-col items-start gap-3"
        >
          <div id="Settings Nav" className="item-start g-3 flex h-[28px]">
            <div
              id="Settings Nav Inner Container"
              className="flex h-[28px] w-[642px] items-center justify-between"
            >
              <div id="Frame-1" className="flex items-center gap-3">
                <button className="h-[20px] w-[100px] bg-blue-100">Back</button>
              </div>
              <h1
                id="Manage Share Settings text"
                className="items-center text-lg font-semibold leading-7"
              >
                Manage Share Settings
              </h1>
              <InfoGray />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
