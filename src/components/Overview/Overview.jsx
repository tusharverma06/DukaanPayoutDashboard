import React from 'react'
import DropDownArrow from '../../../public/images/outlineArrowDown.svg'
import DataContainer from './DataContainer'
import Transactions from '../Transactions/Transactions'

const Overview = () => {
    const OrderData = [
        {
            title: "Online orders",
            value: "231"
        },
        {
            title: "Amount received",
            value: "₹23,92,312.19"
        },
    ]
    return (
        <div className='w-full gap-8 px-6 xl:px-8 flex-col-start'>

            <div className="w-full gap-6 flex-col-start">
                {/* heading and sort date */}
                <div className="w-full flex-between">
                    <h1 className="text-[#1A181E] lg:text-xl text-base font-medium font-Galano">
                        Overview
                    </h1>

                    <div className="flex-center gap-1 py-1.5  px-[14px] rounded bg-white border cursor-pointer  border-[#D9D9D9] ">
                        <span className="text-[#4D4D4D] text-base font-normal font-Galano">Last Month</span>
                        <img src={DropDownArrow} alt="" className='w-4 h-4' />
                    </div>
                </div>

                {/* online orders and amount received */}
                <div className="flex-wrap w-full gap-5 flex-between">
                    {OrderData.map(({ title, value }, id) => <DataContainer title={title} value={value} key={id} />)}
                </div>
            </div>

            <Transactions />
        </div>
    )
}

export default Overview