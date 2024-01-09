import React from 'react'

type CardProps = {
    title: string;
    amount: string
}

const Card = ({ title, amount }: CardProps) => {
    return (
        <div
            style={{
                boxShadow: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)"
            }}
            className="w-full flex flex-col gap-4 bg-[#fff] p-5 rounded-lg">
            <h2 className="text-[16px] text-[#4D4D4D] font-[400]">
                {title}
            </h2>
            <h3 className="text-[32px] text-[#1A181E] font-[500]">
                {amount}
            </h3>
        </div>
    )
}

export default Card