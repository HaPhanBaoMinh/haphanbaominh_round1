import React from 'react'

function Button({ content }) {
    return (
        <div className="w-100 py-4 bg-[#171725] rounded">
            <p className="text-[18px] font-semibold text-white text-center ">{content}</p>
        </div>
    )
}

export default Button