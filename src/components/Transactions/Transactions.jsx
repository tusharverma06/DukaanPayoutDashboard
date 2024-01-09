import React from 'react'
import downLoad from '../../../public/images/downloadIcon.svg'
import Sort from '../../../public/images/sortIcon.svg'
import Table from './TableRow'
import DropDownArrow from '../../../public/images/downArrowGrey.svg'
import Info from '../../../public/images/infoIcon.svg'
import TableRow from './TableRow'

const Transactions = () => {
    const headings = [
        {
            title: "Order ID",
            icon: null
        },
        {
            title: "Order date",
            icon: DropDownArrow
        },
        {
            title: "Order amount",
            icon: null
        },
        {
            title: "Transaction fees",
            icon: Info
        },
    ]

    const Rows = [
        {
            id: 281209,
            date: "7 July, 2023",
            orderAmt: "₹1,278.23",
            fees: "₹22"
        },
        {
            id: 281209,
            date: "7 July, 2023",
            orderAmt: "₹1,278.23",
            fees: "₹22"
        },
        {
            id: 281209,
            date: "7 July, 2023",
            orderAmt: "₹1,278.23",
            fees: "₹22"
        },
        {
            id: 281209,
            date: "7 July, 2023",
            orderAmt: "₹1,278.23",
            fees: "₹22"
        },
        {
            id: 281209,
            date: "7 July, 2023",
            orderAmt: "₹1,278.23",
            fees: "₹22"
        },
        {
            id: 281209,
            date: "7 July, 2023",
            orderAmt: "₹1,278.23",
            fees: "₹22"
        },
        {
            id: 281209,
            date: "7 July, 2023",
            orderAmt: "₹1,278.23",
            fees: "₹22"
        },
        {
            id: 281209,
            date: "7 July, 2023",
            orderAmt: "₹1,278.23",
            fees: "₹22"
        },
        {
            id: 281209,
            date: "7 July, 2023",
            orderAmt: "₹1,278.23",
            fees: "₹22"
        },
        {
            id: 281209,
            date: "7 July, 2023",
            orderAmt: "₹1,278.23",
            fees: "₹22"
        },
    ]
    return (
        <div className='w-full gap-5 flex-col-start'>
            <h1 className="text-[#1A181E] lg:text-xl text-base w-full text-start font-medium font-Galano">
                Transactions | This Month
            </h1>

            <div className="p-3 bg-white shadow-[0px_2px_6px_0px_#1A181E0A] rounded-lg w-full flex-col-start gap-3">

                {/* search by order id */}
                <div className="w-full flex-between">
                    {/* search */}
                    <div className="w-[calc(100%-135px)] sm:w-[248px] relative">
                        {/* search icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className='absolute -translate-y-1/2 left-4 top-1/2' width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <g clip-path="url(#clip0_91507_83651)">
                                <path d="M5.95 10.5263C3.4412 10.5263 1.4 8.48 1.4 5.96491C1.4 3.44982 3.4412 1.40351 5.95 1.40351C8.4588 1.40351 10.5 3.44982 10.5 5.96491C10.5 8.48 8.4588 10.5263 5.95 10.5263ZM10.7443 9.48281C11.4674 8.49474 11.9 7.2814 11.9 5.96491C11.9 2.67579 9.2309 0 5.95 0C2.6691 0 0 2.67579 0 5.96491C0 9.25403 2.6691 11.9298 5.95 11.9298C7.4137 11.9298 8.7542 11.3944 9.7909 10.5116L12.2528 12.9796C12.3893 13.1165 12.5685 13.1853 12.7477 13.1853C12.9269 13.1853 13.1061 13.1165 13.2426 12.9796C13.5163 12.7053 13.5163 12.2618 13.2426 11.9874L10.7443 9.48281Z" fill="#999999" />
                            </g>
                            <defs>
                                <clipPath id="clip0_91507_83651">
                                    <rect width="14" height="14" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <input type="text" placeholder='Search by order ID...' className="w-full focus:border-[#D9D9D9] focus:outline-none focus:ring-0 py-2.5 px-4 pl-[38px]  rounded bg-white border border-[#D9D9D9] text-[#999] placeholder:text-sm text-sm placeholder:text-[#999]  font-normal font-Galano " />
                    </div>

                    {/* sort , download */}
                    <div className="gap-3 flex-center">

                        {/* sort  button */}
                        <button className="flex-center gap-1 py-1.5  px-3 h-9 rounded bg-white border cursor-pointer  border-[#D9D9D9] ">
                            <span className="text-[#4D4D4D] sm:block hidden  text-base font-normal font-Galano">Sort</span>
                            <img src={Sort} alt="" className='w-4 h-4' />
                        </button>

                        {/* download button */}
                        <button className="flex-center gap-1  w-9 h-9   rounded bg-white border cursor-pointer  border-[#D9D9D9] ">
                            <img src={downLoad} alt="" className='w-5 h-5' />
                        </button>
                    </div>
                </div>

                {/* table */}
                <div className='w-full max-w-full overflow-auto flex-col-start !items-start no-scrollbar'>
                    <div className="w-max min-w-full flex-between gap-10 rounded bg-[#F2F2F2] py-2.5 px-3">
                        {headings.map(({ title, icon }, id) => <div key={id} className={`w-[calc(100%-40px)] min-w-[200px] ${id === 3 || id === 2 ? "flex-end" : "flex-start"} !items-center gap-1`}>
                            <span className="text-[#4D4D4D] text-sm font-medium font-Galano">{title}</span>
                            {icon &&
                                <img src={icon} alt="" className='w-3 mt-[3px] h-3' />
                            }
                        </div>)}
                    </div>
                    <div className="w-full flex-col-start !items-start">
                        {Rows.map(({ id, orderAmt, fees, date }, ind) => <TableRow key={ind} id={id} orderAmt={orderAmt} fees={fees} date={date} />)}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Transactions