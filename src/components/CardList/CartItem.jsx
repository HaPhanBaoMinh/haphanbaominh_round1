import React from 'react'
import CardTitle from '../Text/CardTitle';
function CartItem({ card, isLastItem }) {
    console.log(isLastItem);
    return (
        <div className={`h-[250px] min-w-[210px] border border-[#F1F1F5] bg-[#FFFFFF] rounded-md overflow-hidden inline-block ml-6 ${isLastItem ? "mr-6" : undefined}`}>
            <img src={card.image} alt="img" />
            <div className='px-4 pt-4'>
                <CardTitle title={card.title} type={card.type} />
                <p className='text-[#92929D] font-normal text-base'>{card.description}</p>
                {card.type ? <p className='mt-2 text-[#0062FF] text-sm'>Insufficient coins</p> : undefined}
            </div>
        </div>
    )
}

export default CartItem