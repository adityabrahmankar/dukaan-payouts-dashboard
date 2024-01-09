import { columns } from '@/app/(routes)/transaction-columns'
import { TransactionTable } from '@/app/(routes)/transaction-table'
import { TransactionItems } from '@/constants'
import React from 'react'

type Props = {}

const Transactions = (props: Props) => {
    return (
        <div className="flex flex-col gap-5 w-full h-full">
            <h3 className="text-[20px] font-[500] text-[#1A181E]">
                Transactions | This month
            </h3>
            <div className="rounded-lg flex flex-1 flex-col bg-[#fff] w-full h-full shadow-[0px 2px 6px 0px rgba(26, 24, 30, 0.04)]">
                <TransactionTable columns={columns} data={TransactionItems} />
            </div>
        </div>
    )
}

export default Transactions