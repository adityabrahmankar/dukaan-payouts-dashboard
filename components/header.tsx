import React from 'react'
import MobileNavbar from './mobile-navbar'
import { MessageIcon } from './icons/message'
import { DropdownIcon } from './icons/dropdown'
import { SearchIcon } from './icons/search'
import { HelpIcon } from './icons/help'

type Props = {}

const Header = (props: Props) => {
    return (
        <div className='fixed bg-[#fafafa] border-r-0 left-0 right-0 top-0 sm:left-[224px] h-[64px] px-4 sm:px-8 py-3 flex flex-row justify-between items-center  gap-4 border border-b border-[#D9D9D9] z-10'>
            <div className='sm:hidden flex'>
                <MobileNavbar />
            </div>
            <div className='w-full flex flex-row gap-4 items-center justify-start'>
                <div className='text-[15px] font-[400] text-[#1A181E]'>
                    Payments
                </div>
                <div className='hidden lg:flex flex-row items-center justify-start gap-[6px] text-[#4D4D4D] text-[12px] font-[400] cursor-pointer'>
                    <HelpIcon />
                    <div>How it works</div>
                </div>
            </div>
            <div className="max-w-[400px] py-[9px] px-4 rounded-[6px] flex flex-row gap-2 items-center justify-start border bg-[#f2f2f2]  border-[#D9D9D9] flex-1">
                <SearchIcon />
                <input
                    placeholder='Search features, tutorials, etc.'
                    className='focus:outline-none w-[248px] bg-[#f2f2f2] hidden sm:flex' />
            </div>
            <div className='w-full text-end hidden md:flex items-center gap-3 justify-end'>
                <div className='bg-[#E6E6E6] h-[40px] w-[40px] flex items-center justify-center rounded-full cursor-pointer'>
                    <MessageIcon />
                </div>
                <div className='cursor-pointer'>
                    <DropdownIcon />
                </div>
            </div>
        </div>
    )
}

export default Header