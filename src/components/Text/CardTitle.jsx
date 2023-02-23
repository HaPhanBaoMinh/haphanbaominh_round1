import React from 'react';
import { BsCoin } from "react-icons/bs";

function CardTitle({ title, type }) {


    if (type === "dark")
        return (
            <h5 className="text-[#696974] font-semibold text-base pb-2 flex gap-1 items-center">
                <BsCoin />
                {title}
            </h5>
        )

    return (
        <h5 className="text-[#0062FF] font-semibold text-base pb-2">
            {title}
        </h5>
    )
}

export default CardTitle