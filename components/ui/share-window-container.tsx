import React from "react";
import { useState } from "react";
import ShareWindow from "./share-window";
import ShareWindowSettings from "./share-window-settings";
export default function ShareWindowContainer() {
  //Global State and two child
  // Whenevr state changes inside changes inside a component all its children get render

  // In order to get rid of re-rendering between the two components
  //Place the state where it belongs
  // Always look for opportunities to put the state where it belongs
  const [settingsClicked, setSettingsClicked] = useState(false);

  return (
    <>
      {settingsClicked ? (
        <ShareWindowSettings backButtonClickHandlerProp={setSettingsClicked} />
      ) : (
        <ShareWindow settingsClickHandlerProp={setSettingsClicked} />
      )}
    </>
  );
}
