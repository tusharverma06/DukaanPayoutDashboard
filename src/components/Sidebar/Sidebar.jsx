import React from 'react'
import storeLogo from '../../../public/images/storeLogo.svg'
import arrowIcon from '../../../public/images/downArrow.svg'
import walletIcon from '../../../public/images/walletIcon.svg'

// nav icons
import Home from '../../../public/images/homeIcon.svg'
import orderIcon from '../../../public/images/orderIcon.svg'
import deliveryIcon from '../../../public/images/deliveryIcon.svg'
import marketingIcon from '../../../public/images/marketingIcon.svg'
import analyticsIcon from '../../../public/images/analyticsIcon.svg'
import paymentsIcon from '../../../public/images/paymentsIcon.svg'
import toolsIcon from '../../../public/images/toolsIcon.svg'
import dicountsIcon from '../../../public/images/dicountsIcon.svg'
import audienceIcon from '../../../public/images/audienceIcon.svg'
import appearenceIcon from '../../../public/images/appearenceIcon.svg'
import pluginsIcon from '../../../public/images/pluginsIcon.svg'
import productsIcon from '../../../public/images/productIcon.svg'

// navlink import
import NavLink from './NavLink'

const Sidebar = ({ isOpen, handleToggle }) => {

    const NavLinks = [
        {
            title: "Home",
            icon: Home,
            href: "/"
        },
        {
            title: "Orders",
            icon: orderIcon,
            href: "/"
        },
        {
            title: "Products",
            icon: productsIcon,
            href: "/"
        },
        {
            title: "Delivery",
            icon: deliveryIcon,
            href: "/"
        },
        {
            title: "Marketing",
            icon: marketingIcon,
            href: "/"
        },
        {
            title: "Analytics",
            icon: analyticsIcon,
            href: "/"
        },
        {
            title: "Payments",
            icon: paymentsIcon,
            href: "/"
        },
        {
            title: "Tools",
            icon: toolsIcon,
            href: "/"
        },
        {
            title: "Discounts",
            icon: dicountsIcon,
            href: "/"
        },
        {
            title: "Audience",
            icon: audienceIcon,
            href: "/"
        },
        {
            title: "Appearance",
            icon: appearenceIcon,
            href: "/"
        },
        {
            title: "Plugins",
            icon: pluginsIcon,
            href: "/"
        },
    ];

    return (
        <div className={`w-[224px] bg-[#1E2640] z-[1000] py-4 px-2.5 flex-col-between lg:fixed absolute left-0 top-0 h-screen gap-4 ${isOpen ? 'translate-x-0' : 'lg:translate-x-0 -translate-x-full '} transition-all duration-500 ease-in-out `}>

            {/* Hamburger open menu icon */}
            <button
                onClick={handleToggle}
                className="text-white/80 focus:outline-none lg:hidden block focus:bg-transparent absolute right-4 top-2 z-[1002]"
            >

                <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 6l12 12M18 6l-12 12"
                    />
                </svg>

            </button>

            <div className="w-full gap-6 flex-col-start ">

                {/* store details */}
                <div className="relative w-full gap-3 px-2 flex-start">

                    {/* store logo */}
                    <div className="w-10 h-10 bg-white rounded">
                        <img src={storeLogo} alt="" className='object-cover ' />
                    </div>

                    {/* store name , store visit link */}
                    <div className="flex-col-start !items-start gap-1">
                        <h1 className="text-[15px] leading-[22px] font-medium font-Inter text-white">Nishyan</h1>

                        <span className="text-[13px] leading-4 font-normal font-Galano underline text-white/80 hover:text-white transition-all duration-300 cursor-pointer ">
                            Visit store
                        </span>
                    </div>

                    {/* dropdown arrow */}
                    <img src={arrowIcon} alt="" className='absolute w-5 h-5 -translate-y-1/2 cursor-pointer right-2 top-1/2' />

                </div>

                {/* nav links mapped */}
                <div className="w-full gap-1 flex-col-start navlinks h-[calc(100vh-168px)] overflow-auto ">
                    {NavLinks.map(({ icon, title, href }, id) => <NavLink href={href} title={title} icon={icon} key={id} />)}
                </div>

            </div>

            {/* available credits */}
            <div className="w-full py-1.5 cursor-pointer px-3 rounded bg-[#353C53] gap-2.5  flex-start">
                {/* wallet icon */}
                <div className="p-1.5 bg-white/10 rounded">
                    <img src={walletIcon} alt="" />
                </div>

                {/* credits value */}
                <div className="flex-col-start !items-start gap-1">
                    <h1 className="text-[13px] font-normal leading-4 font-Inter text-white/80">
                        Available credits
                    </h1>

                    <span className="text-base font-normal text-white font-Inter ">
                        222.10
                    </span>

                </div>
            </div>
        </div>
    )
}

export default Sidebar