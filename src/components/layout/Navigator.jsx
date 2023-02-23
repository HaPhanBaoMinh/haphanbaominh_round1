import React from 'react';
import { RiHomeLine } from "react-icons/ri";
import { BiBell, } from "react-icons/bi";
import { FiCreditCard, FiUser } from "react-icons/fi";


function Navigator() {
    return (
        <div className='w-screen h-[85px] bg-[#ffff] border-t fixed bottom-[-1px] right-0 flex p-7 justify-between items-center'>
            <RiHomeLine className='text-3xl text-[#d5d5dc]' />
            <div className='relative'>
                <BiBell className='text-3xl text-[#d5d5dc]' />
                <div className='w-2 h-2 bg-red-500 rounded-full absolute top-1 right-1' />
            </div>
            <FiCreditCard className='text-3xl text-[#d5d5dc]' />
            <FiUser className='text-3xl text-[#d5d5dc]' />
        </div>
    )
}

export default Navigator