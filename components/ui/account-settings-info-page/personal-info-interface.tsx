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
} from "../select";
import { InputRightElement } from "../input-element";
import { HelpCircle } from "@/components/icons";
import { Label } from "../label";
import React from "react";

export default function PersonalInfoInterface() {
  return (
    <div className="pl-[350px] pt-[88px]">
      <div>
        <h1>Personal Info</h1>
        <p>
          Euismod amet dolor sem phasellus viverra ac. Et cras enim cursus
          lobortis nec lorem dapibus proin. Lacus diam rhoncus blandit ipsum
          nibh morbi at gravida in.
        </p>
        <div id="Avatar Parent Div">
          <div className="inline-flex items-center gap-x-3">
            <Avatar isOnline size="xl">
              <AvatarImage alt="Man" src="/man.jpg" />
              <AvatarFallback>M</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-[18px] font-semibold leading-7 text-gray-700">
                Christopher Torres
              </span>
              <span className="text-[18px] leading-6 text-gray-500">
                chris@blendmetrics.com
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div id="First set of input boxes" className="flex flex-col">
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
                Email
              </Label>
              <Input
                id="email"
                placeholder="olivia@untitledui.com"
                type="email"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email" size="sm">
                What team do you work on?
              </Label>
              <InputGroup>
                <Input id="email" placeholder="Select Team" type="email" />
                <InputRightElement>
                  <HelpCircle className="text-gray-500" />
                </InputRightElement>
              </InputGroup>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email" size="sm">
                Language
              </Label>
              <InputGroup>
                <Input id="email" placeholder="English" type="email" />
                <InputRightElement>
                  <HelpCircle className="text-gray-500" />
                </InputRightElement>
              </InputGroup>
            </div>
          </div>
          <div id="Second set of input boxes" className="flex flex-col">
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
            <div className="flex items-center">
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
                <div className="space-y-1.5">
                  <Label htmlFor="email" size="sm">
                    Job Title
                  </Label>
                  <Input id="email" placeholder="President" type="email" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
