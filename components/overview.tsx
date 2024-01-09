import { ChevronDownIcon } from 'lucide-react'
import React from 'react'
import Card from './card'

type Props = {}

const Overview = (props: Props) => {
    return (
        <div className="flex flex-col gap-6 items-start justify-between">
            <div className="w-full flex flex-row items-center justify-between h[36px]">
                <h3 className="text-[20px] text-[#1A181E] font-[500]">Overview</h3>
                <div className="flex flex-row items-center justify-center py-[6px] w-[137px] rounded-[4px] bg-white border border-[#D9D9D9] gap-[7px]">
                    <div className="text-[#4d4d4d] text-[16px] font-[400px] cursor-pointer">
                        Last Month
                    </div>
                    <ChevronDownIcon className="text-[#D9D9D9]" />
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5 justify-start w-full ">
                <Card title="Online orders" amount="231" />
                <Card title="Amount Recieved" amount="₹23,92,312.19" />
            </div>
        </div>
    )
}

export default Overview