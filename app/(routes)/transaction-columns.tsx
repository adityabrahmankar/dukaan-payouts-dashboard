"use client"

import { ChevronDownIcon } from "@/components/icons/chevron-down";
import { InfoIcon } from "@/components/icons/info";
import { ColumnDef } from "@tanstack/react-table";
import { ReactNode } from "react";

interface TransactionItem {
    order_id: string;
    order_date: string;
    order_amount: string;
    transaction_fees: string;
}

export const columns: ColumnDef<TransactionItem, ReactNode>[] = [
    {
        accessorKey: "order_id",
        header: "Order Id",
        cell: ({ getValue }) => <span className="text-[#146EB4]">{getValue()}</span>,
    },
    {
        accessorKey: "order_date",
        header: () => (
            <div className="flex items-center">
                Order Date <ChevronDownIcon className="ml-2" />
            </div>
        )
    },
    {
        accessorKey: "order_amount",
        header: "Order Amount"
    }, {
        accessorKey: "transaction_fees",
        header: () => (
            <div className="flex items-center">
                Transaction Fees <InfoIcon className="ml-2" />
            </div>
        )
    },
]