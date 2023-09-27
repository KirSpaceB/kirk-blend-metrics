import React from "react";
import {
  DropdownMenu,
  DropdownMenuCheckItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Button } from "./button";
interface InviteComponentInterface {
  inputVal: string;
}

export default function Invites({ inputVal }: InviteComponentInterface) {
  const [state, setState] = React.useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
  });

  return (
    <div>
      <h1>Invites</h1>
      <div className="flex flex-row space-x-10">
        <div>{inputVal}</div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="ghost" visual="gray">
              Viewer
              <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuCheckItem
              checked={state.option1}
              onCheckedChange={(checked) =>
                setState((prevState) => ({
                  ...prevState,
                  option1: checked,
                }))
              }
            >
              Viewers
            </DropdownMenuCheckItem>
            <DropdownMenuCheckItem
              checked={state.option2}
              onCheckedChange={(checked) =>
                setState((prevState) => ({
                  ...prevState,
                  option2: checked,
                }))
              }
            >
              Editor
            </DropdownMenuCheckItem>
            <DropdownMenuCheckItem
              checked={state.option3}
              onCheckedChange={(checked) =>
                setState((prevState) => ({
                  ...prevState,
                  option3: checked,
                }))
              }
            >
              Resent Invite
            </DropdownMenuCheckItem>
            <DropdownMenuCheckItem
              checked={state.option4}
              onCheckedChange={(checked) =>
                setState((prevState) => ({
                  ...prevState,
                  option4: checked,
                }))
              }
            >
              Remove
            </DropdownMenuCheckItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
