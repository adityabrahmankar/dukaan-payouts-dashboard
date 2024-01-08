"use client"

import { NavBarItems } from '@/constants'
import Image from 'next/image'
import { ChevronDownIcon } from './icons/chevron-down'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { WalletIcon } from './icons/wallet'

type Props = {}

const Navbar = (props: Props) => {
    const pathname = usePathname()

    console.log(pathname)

    return (
        <div className='h-full flex flex-col justify-between items-center gap-4' >
            <div className='w-full flex flex-col gap-6'>
                <div className='flex flex-row gap-3 items-center justify-center w-[192px]'>
                    <Image alt='image' src={'/images/store.png'} width={39} height={39} />
                    <div className='flex flex-1 flex-col justify-start items-start '>
                        <div className='text-white text-[16px] font-[500]'>Nishyan</div>
                        <div className='text-white/80 underline text-[13px] font-[400]'>Visit Store</div>
                    </div>
                    <div><ChevronDownIcon /></div>
                </div>
                <div className='flex flex-col flex-1 gap-1'>
                    {NavBarItems.map((item) => (
                        <div
                            key={item.name}
                            className={cn('flex flex-row gap-3 px-4 py-2 rounded-[4px] text-sm text-white/80 w-[208px] ', pathname === item.href ? 'bg-[#353C53]' : '')}>
                            <item.icon className='' />
                            {item.name}
                        </div>
                    ))}
                </div>
            </div>
            <div className='w-full px-3 py-[6px] bg-[#353C53] rounded-[4px]'>
                <div className='flex flex-row items-center gap-3 '>
                    <div className='bg-white/10 p-[6px] rounded-[4px]'>
                    <WalletIcon className='' />
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-[13px] text-white/80'>
                            Available credits
                        </div>
                        <div className='text-[16px] text-white'>222.10</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar