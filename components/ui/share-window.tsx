import React, { ReactComponentElement } from 'react'
import { Input } from './input'
import { GearGray, Settings } from '../icons'
import { Label } from './label'
import { Inter } from 'next/font/google'
import { Button } from './button'
import { Plus2 } from '../icons'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'
import { InfoGray } from '../icons'

import { useState } from 'react'

import { AvatarProps } from '@radix-ui/react-avatar'
import Dropdown from './avatar-dropdown'

export interface IAvatarItem {
  email: string;
  image: React.ForwardRefExoticComponent<AvatarProps & React.RefAttributes<HTMLSpanElement>>;
}


const inter = Inter({subsets:["latin"]})

export default function ShareWindow() {

  const [inputValue, setInputValue] = useState("");

  const [avatars, setAvatars] = useState<IAvatarItem[]>([
    { email: 'chris@gmail.com', image: Avatar },
    {email:'tranthuy.nute@gmail.com', image:Avatar}
  ]);

  const filteredAvatars = avatars.filter(avatar => avatar.email.startsWith(inputValue));

  return (
    <div className={inter.className}>
      <div
        id='Modal'
        className='flex w-[690px] p-5 gap-8 flex-col items-center flex-shrink-0 rounded-lg bg-white shadow-xl'
      >

        <div id='Frame' className='flex justify-between items-center self-stretch'>
          <h1 className='text-[#1D2939] text-lg font-semibold'>Share "File/Folder name</h1>
          <div className='flex items-start gap-4'>
            <InfoGray className='w-6 h-6'/>
            <Settings className='w-6 h-6 text-gray-500'/>
          </div>
        </div>

        <div id='Content' className='flex flex-col items-start gap-6 self-stretch'>
          <div id='Fields' className='flex flex-col items-start gap-6 self-stretch'>
            <div id='Frame' className='flex items-end gap-3 self-stretch'>
              <div 
                id='Input field' 
                className='flex flex-col items-start self-stretch gap-2 w-full h-auto'
              >
                <Label
                  htmlFor="email"
                  size="sm"
                >
                  Share with Email
                </Label>
                <Input
                  id="email"
                  placeholder="Add emails or find contacts"
                  type="email"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className='relative'
                />
                {inputValue &&  <Dropdown avatars={filteredAvatars}/>}
              </div>
              
              <Button 
                variant='light'
                className='w-auto h-auto flex py-3 px-5 justify-center items-center gap-2 rounded-md opacity-50'
              >
                Add
              </Button>
            </div>

            <Button 
              variant='link' 
              visual='gray'
              rightIcon={<Plus2 className='h-6 w-6'/>}
              className='p-0 text-base font-semibold text-gray-700'
              id='_Button base'
            >
              Add a Message
            </Button>

          </div>
        </div>

        <div 
          id='_Modal actions' 
          className='flex justify-between items-center self-stretch'
        >

          <Button
            leftIcon={<GearGray/>}
            size='xl'
            variant='link'
            className='p-0'
          >
            Copy Link
          </Button>

          <div 
            id='Frame'
            className='flex items-start gap-3'
          >
            <Button
              variant="outlined"
              visual="gray"
              size='sm'
            >
              Cancel
            </Button>

            <Button size='sm' className=''>
              Send Invite
            </Button>
          </div>

        </div>
      </div>
    </div>
  )
}