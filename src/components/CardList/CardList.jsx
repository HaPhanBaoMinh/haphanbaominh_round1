import React from 'react'
import CartItem from './CartItem'
import { v4 as uuidv4 } from 'uuid';

function CardList({ data, title }) {
    return (
        <div className="w-full h-auto mb-[50px] mt-7">
            <p className="px-6 pb-4 text-[#171725] text-lg font-semibold">{title}</p>
            {/* Display */}
            <div className="w-full h-full overflow-hidden">
                <div className="w-auto h-full flex overflow-y-scroll scrollbar-hide" >
                    {
                        data.map((card, index) => <CartItem card={card} key={uuidv4()} isLastItem={index === data.length - 1} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default CardList