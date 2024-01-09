import { DownloadIcon } from '@/components/icons/download'
import { SearchIcon } from '@/components/icons/search'
import { SortIcon } from '@/components/icons/sort'
import React from 'react'

type Props = {}

const TransactionHeader = (props: Props) => {
    return (
        <div className="w-full flex flex-row justify-between items-center">
            <div className="w-fit py-[10px] px-4 rounded-sm flex flex-row gap-2 items-center justify-start border  border-[#D9D9D9]">
                <SearchIcon />
                <input
                    placeholder="Search by Order Id"
                    className="focus:outline-none w-[248px] hidden md:flex"
                />
            </div>
            <div className="flex flex-row gap-3 items-center">
                <div className="px-3 py-[6px] flex flex-row gap-[6px] items-center border border-[#D9D9D9] rounded-sm cursor-pointer">
                    <h2 className="text-[#4d4d4d] font-[400]">
                        Sort
                    </h2>
                    <SortIcon />
                </div>
                <div className="border border-[#d9d9d9] rounded-sm p-2 cursor-pointer">
                    <DownloadIcon />
                </div>
            </div>
        </div>
    )
}

export default TransactionHeader