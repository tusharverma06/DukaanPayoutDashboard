import React from 'react'
import QuestionMark from '../../../public/images/questionMarkIcon.svg'
import SearchIcon from '../../../public/images/searchIcon.svg'
import Announcement from '../../../public/images/announcementTopbar.svg'
import DropDown from '../../../public/images/downArrowGrey.svg'

const Topbar = ({ isOpen, handleToggle }) => {
    const actionButtons = [
        {
            icon: Announcement
        },
        {
            icon: DropDown
        },
    ]
    return (
        <div className='w-full sticky top-0 right-0 bg-white z-[100] gap-4 px-6 py-3 flex-between xl:px-8 border-b border-b-[#D9D9D9] '>

            {/* heading, how it works */}
            <div className="gap-4 flex-start">

                {/* Hamburger open menu icon */}
                <button
                    onClick={handleToggle}
                    className="relative block text-black/80 focus:outline-none lg:hidden focus:bg-transparent "
                >

                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>


                </button>

                <h1 className="text-[#1A181E] lg:text-xl text-base font-medium font-Galano">
                    Payments
                </h1>

                {/* how it works */}
                <div className="flex-start gap-1.5">
                    <img src={QuestionMark} alt="" className='w-[14px] h-[14px] ' />
                    <span className="text-[#4D4D4D] text-[10px] sm:text-xs font-normal font-Galano">
                        How it works
                    </span>
                </div>
            </div>

            {/* search */}
            <div className="lg:w-[calc(100%/3-16px)] relative">
                <img src={SearchIcon} className='absolute w-4 h-6 -translate-y-1/2 left-4 top-1/2' alt="" />
                <input type="text" placeholder='Search features, tutorials, etc.' className="w-full focus:border-0 focus:outline-none focus:ring-0 py-[9px] px-4 pl-10  rounded-md bg-[#F2F2F2] lg:block hidden text-[#808080] placeholder:text-[15px] text-[15px] placeholder:leading-[22px] placeholder:text-[#808080] leading-[22px] font-normal font-Galano " />
            </div>

            {/* announcement and dropdown buttons */}
            <div className="gap-3 flex-start">
                {actionButtons.map(({ icon }, id) => <button key={id} className='flex-center rounded-full sm:w-10 sm:h-10 w-6 h-6 bg-[#E6E6E6]'>
                    <img src={icon} alt="" className='w-3 h-3 sm:w-5 sm:h-5' />
                </button>)}
            </div>

        </div>
    )
}

export default Topbar