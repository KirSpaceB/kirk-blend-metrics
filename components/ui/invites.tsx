import React from "react";
interface InviteComponentInterface {
  inputVal: string;
}

export default function Invites({ inputVal }: InviteComponentInterface) {
  return (
    <div>
      invites
      <div>{inputVal}</div>
    </div>
  );
}
