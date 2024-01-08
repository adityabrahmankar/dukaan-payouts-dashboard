import React from 'react'

type Props = {}

const Header = (props: Props) => {
    return (
        <div className='fixed top-0 left-[224px] right-0 h-[64px] px-8 py-3 flex flex-row justify-between items-center w-full gap-4 border border-b border-[#D9D9D9]'>
            <div className='w-full flex flex-row gap-4 items-center justify-start'>
                <div>
                    Payments
                </div>
                <div className='flex flex-row items-center justify-start gap-[6px] text-[#4D4D4D] text-[12px] font-[400]'>
                    <div>?</div>
                    <div>How it works</div>
                </div>
            </div>
            <input
                disabled
                placeholder='Search features, tutorials, etc.'
                className='w-full rounded-[6px] bg-[#f2f2f2] py-[9px] px-4' />
            <div className='w-full text-end'>Help</div>
        </div>
    )
}

export default Header