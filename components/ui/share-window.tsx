import React from 'react'
import { Input } from './input'
import { Settings } from '../icons'
import { HelpCircle } from '../icons'
import { Label } from './label'
import { Inter } from 'next/font/google'
import { Button } from './button'
import { Plus2 } from '../icons'
import { Link } from '../icons'

const inter = Inter({subsets:["latin"]})

export default function ShareWindow() {
  return (
    <div className={inter.className}>
      <div
        id='Modal'
        className='flex w-[690px] p-6 gap-8 flex-col items-center flex-shrink-0 rounded-lg bg-white'
      >

        <div id='Frame' className='flex justify-between items-center self-stretch'>
          <h1 className='text-[#1D2939] text-lg font-semibold'>Share "File/Folder name</h1>
          <div className='flex items-start gap-4'>
            <HelpCircle className='w-6 h-6 text-gray-500'/>
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
                  placeholder="olivia@untitledui.com"
                  type="email"
                />
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
            leftIcon={<Link className='w-[15px] h-[15px]'/>}
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