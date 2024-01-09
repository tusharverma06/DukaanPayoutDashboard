import React from 'react'

const DataContainer = ({ title, value }) => {
    return (
        <div className='md:w-[calc(100%/2-20px)] bg-white w-full flex-col-start rounded-lg shadow-[0px_2px_6px_0px_#1A181E0A] !items-start gap-4 p-5'>

            {/* title of card data */}
            <h1 className="text-[#4D4D4D] lg:text-base text-sm font-normal font-Galano">
                {title}
            </h1>

            {/* value */}
            <h1 className="text-[#1A181E] lg:text-[32px] lg:leading-[38px] font-medium text-xl font-Galano">
                {value}
            </h1>

        </div>
    )
}

export default DataContainer