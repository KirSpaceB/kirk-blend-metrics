import { Avatar, AvatarImage, AvatarFallback } from "../avatar";
import { Input } from "../input";
import { InputGroup } from "../input-group";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  Trigger,
} from "../select";
import { InputRightElement } from "../input-element";
import { HelpCircle } from "@/components/icons";
import { Label } from "../label";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuCheckItem,
  DropdownMenuContent,
} from "../dropdown-menu";
import { Button } from "../button";
import { ChevronDown } from "lucide-react";
import React from "react";
import { Badge } from "../badge";
import { AvatarPencil } from "@/components/icons";
export default function PersonalInfoInterface() {
  return (
    <div className="pl-[370px] pt-[110px]">
      <div className="h-[580px] w-[664px]">
        <div className="flex flex-col gap-3">
          <h1 className="font-inter text-base font-semibold capitalize leading-6">
            Personal Info
          </h1>
          <p className="text-sm font-normal text-[#667085]">
            Euismod amet dolor sem phasellus viverra ac. Et cras enim cursus
            lobortis nec lorem dapibus proin. Lacus diam rhoncus blandit ipsum
            nibh morbi at gravida in.s
          </p>

          <div id="Avatar Parent Div" className="mb-[32px] mt-[24px]">
            <div className="inline-flex items-center gap-x-3">
              <Avatar size="2xl">
                <AvatarImage alt="Man" src="/man.jpg" />
                <AvatarFallback>M</AvatarFallback>
              </Avatar>

              <AvatarPencil className="h-[30px] w-[30px] rounded-full border-[1px] border-solid border-[#98A2B3] p-[6px] sm:absolute sm:left-[435px] sm:top-[280px]" />
              <div className="flex flex-col pl-6">
                <div className="flex flex-row items-center gap-6">
                  <span className="text-2xl font-medium capitalize text-[#475467]">
                    Christopher Torres
                  </span>
                  <Badge size="sm" visual="primary" variant="rounded">
                    Admin
                  </Badge>
                </div>
                <span className="text-sm font-normal text-[#667085]">
                  chris@blendmetrics.com
                </span>
              </div>
            </div>
          </div>
          <div id="Grid" className="grid grid-cols-2 gap-6">
            {/* Grid Col 1 */}
            <div className="space-y-1.5">
              <Label htmlFor="email" size="sm">
                First Name
              </Label>
              <Input
                id="email"
                placeholder="olivia@untitledui.com"
                type="email"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email" size="sm">
                Last Name
              </Label>
              <Input
                id="email"
                placeholder="olivia@untitledui.com"
                type="email"
              />
            </div>
            {/* Grid col 2 */}
            <div className="space-y-1.5">
              <Label htmlFor="email" size="sm">
                Email
              </Label>
              <Input
                id="email"
                placeholder="olivia@untitledui.com"
                type="email"
              />
            </div>
            <div className=" w-auto ">
              <div className="space-y-1.5">
                <Label htmlFor="tel" size="sm">
                  Phone number
                </Label>
                <div className="flex items-center">
                  <Select defaultValue="US">
                    <SelectTrigger>
                      <SelectValue placeholder="Select a country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="US">US</SelectItem>
                        <SelectItem value="BE">BE</SelectItem>
                        <SelectItem value="RS">RS</SelectItem>
                        <SelectItem value="TR">TR</SelectItem>
                        <SelectItem value="LV">LV</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Input
                    className="rounded-l-none"
                    id="tel"
                    placeholder="+1 (555) 000-0000"
                    type="tel"
                  />
                </div>
              </div>
            </div>

            <div className=" space-y-1.5">
              <Label htmlFor="email" size="sm">
                What team do you work on?
              </Label>
              <div className="">
                <Select defaultValue="US">
                  <SelectTrigger className=" w-[320px] rounded-md">
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="US">US</SelectItem>
                      <SelectItem value="BE">BE</SelectItem>
                      <SelectItem value="RS">RS</SelectItem>
                      <SelectItem value="TR">TR</SelectItem>
                      <SelectItem value="LV">LV</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email" size="sm">
                Job Title
              </Label>
              <Input id="email" placeholder="President" type="email" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email" size="sm">
                Language
              </Label>
              <div className="">
                <Select defaultValue="US">
                  <SelectTrigger className=" w-[320px] rounded-md">
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="US">US</SelectItem>
                      <SelectItem value="BE">BE</SelectItem>
                      <SelectItem value="RS">RS</SelectItem>
                      <SelectItem value="TR">TR</SelectItem>
                      <SelectItem value="LV">LV</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
