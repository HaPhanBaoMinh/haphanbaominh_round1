import React from 'react'
import { IoIosArrowBack } from "react-icons/io"

function BackButton() {
    return (
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center pr=[2px] absolute left-6 top-5">
            <IoIosArrowBack className="text-xl pr-[3px]" />
        </div>
    )
}

export default BackButton