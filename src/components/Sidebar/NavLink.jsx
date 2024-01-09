import React from 'react'

const NavLink = ({ icon, title, href }) => {
    return (
        <a href={href} className={`xl:w-full w-11/12 gap-3 group px-4 py-2 transition-all duration-500 bg-transparent rounded flex-start ${title.toLowerCase() === 'payments' && 'bg-white/10'} hover:bg-white/10 `}>
            {/* link icon */}
            <img src={icon} alt="" className={`w-5 h-5 ${title.toLowerCase() === 'payments' ? 'opacity-100' : 'opacity-80 group-hover:opacity-100 '}`} />

            {/* link title */}
            <span className={`text-sm font-medium font-Inter ${title.toLowerCase() === 'payments' ? 'text-white' : 'text-white/80 group-hover:text-white'} `}>{title}</span>
        </a>
    )
}

export default NavLink