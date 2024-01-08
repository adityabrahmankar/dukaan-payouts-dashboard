import { ChevronDownIcon } from "@/components/icons/chevron-down";

export default async function Payouts() {
    //TODO: Separate into smaller components
    return (
        <div className="pl-[256px] pt-[96px] pr-[32px] pb-[32px]  h-screen inset-0 bg-[#fafafa]">
            <div className=" flex h-full flex-1 flex-col gap-8">
                <div className="flex flex-col gap-6 items-start justify-between">
                    <div className="w-full flex flex-row justify-between h[36px]">
                        <div className="text-[20px] text-[#1A181E] font-[500]">Overview</div>
                        <div className="flex flex-row items-center justify-center py-[6px] w-[137px] rounded-[4px] bg-white border border-[#D9D9D9] gap-[7px]">
                            <div className="text-black/30 text-[16px] font-[400px]">
                                Last Month
                            </div>
                            <ChevronDownIcon className="text-[#D9D9D9]" />
                        </div>
                    </div>
                    <div className="flex flex-row gap-5 justify-start w-full ">
                        <div className="w-full flex flex-col gap-4 bg-[#fff] shadow-[0px 2px 6px 0px rgba(26, 24, 30, 0.04)] p-5 rounded-lg">
                            <div className="text-[16px] text-[#4D4D4D] font-[400]">
                                Online orders
                            </div>
                            <div className="text-[32px] text-[#1A181E] font-[500]">
                                231
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-4 bg-[#fff] p-5 rounded-lg shadow-[0px 2px 6px 0px rgba(26, 24, 30, 0.04)]">
                            <div className="text-[16px] text-[#4D4D4D] font-[400]">
                                Amount Recieved
                            </div>
                            <div className="text-[32px] text-[#1A181E] font-[500]">
                                ₹23,92,312.19
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5 w-full h-full">
                    <div className="text-[20px] font-[500] text-[#1A181E]">
                        Transactions | This month
                    </div>
                    <div className="rounded-lg flex flex-1 flex-col bg-[#fff] w-full h-full shadow-[0px 2px 6px 0px rgba(26, 24, 30, 0.04)]">Table</div>
                </div>
            </div>
        </div>
    )
}