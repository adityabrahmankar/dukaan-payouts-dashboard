import Overview from "@/components/overview";
import Transactions from "@/components/transactions";

export default async function Payouts() {

    return (
        <div className="pl-4 pr-4 sm:pl-[256px] pt-[96px] sm:pr-[32px] pb-[32px] h-full  inset-0 bg-[#fafafa]">
            <div className=" flex h-full flex-1 flex-col gap-8">
                <Overview />
                <Transactions />
            </div>
        </div>
    )
}