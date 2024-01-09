import React from 'react'

const TableRow = ({ id, date, orderAmt, fees }) => {

    return (
        <div className="w-max py-[14px] px-3 min-w-full last:border-0 flex-between gap-10 bg-white border-b border-[#e8e9e8]">

            {/* order id */}
            <span className={`text-[#146EB4] text-sm font-medium font-Galano w-[calc(100%-40px)] min-w-[200px] flex-start !items-center gap-1`}>#{id}</span>

            {/* order date */}
            <span className={`text-[#1A181E] text-sm font-normal font-Galano w-[calc(100%-40px)] min-w-[200px] flex-start !items-center gap-1`}>{date}</span>

            {/* order amt */}
            <span className={`text-[#1A181E] text-sm font-normal font-Galano w-[calc(100%-40px)] min-w-[200px] flex-end !items-center gap-1`}>{orderAmt}</span>

            {/* transaction fees */}
            <span className={`text-[#1A181E] text-sm font-normal font-Galano w-[calc(100%-40px)] min-w-[200px] flex-end !items-center gap-1`}>{fees}</span>
        </div>
    )
}

export default TableRow;