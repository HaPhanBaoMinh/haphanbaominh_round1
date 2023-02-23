import React from 'react'
import Range from '../Range/Range'
import { IoIosArrowForward } from "react-icons/io"
import Button from '../Button/Button'

function AccountCard() {
    return (
        <div className="w-full h-auto  m-auto px-4 mt-10 relative ">
            <div className="w-[343px] h-[416px] bg-white m-auto rounded-lg p-6 shadow-[0_12px_18px_#1717250a]">
                <h5 className="text-sm font-semibold text-[#b5b5be] leading-6">Available Coin balance</h5>
                <p className="text-5xl font-normal leading-[56px]">340</p>
                <Range />
                <p className='text-base font-normal text-[#92929D] tracking-[0.5px]'>
                    You have paid rental fee for $1,200. Pay more $800 to achieve Gold Tier.
                </p>
                <a href="/" className='flex items-center text-[#0062FF] gap-1 pt-4 pb-6'  >
                    View tier benefits
                    <IoIosArrowForward className='text-lg' />
                </a>
                <Button content="My Coupons" />
                <p className='text-sm font-normal mt-4 text-center text-[#B5B5BE]'>Updated : 02/11/2021</p>
            </div>
        </div>
    )
}

export default AccountCard