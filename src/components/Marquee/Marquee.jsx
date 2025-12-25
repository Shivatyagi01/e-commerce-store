import React from 'react'
import './Marquee.css'

const Marquee = () => {
    const marqueeItems = ["SALE 50% OFF", "USE CODE : SALE50", "USE CODE : SALE50", "USE CODE : SALE50", "USE CODE : SALE50", "USE CODE : SALE50", "USE CODE : SALE50", "USE CODE : SALE50", "USE CODE : SALE50", "USE CODE : SALE50", "USE CODE : SALE50", "USE CODE : SALE50"];
    return (
        <div className='marqueeText'>
            <div className="scroller">
                {marqueeItems.map((marqueeItem, index) => (
                    <p key={index}>{marqueeItem}</p>
                ))}
                {marqueeItems.map((marqueeItem, index) => (
                    <p key={index}>{marqueeItem}</p>
                ))}
            </div>
        </div>
    )
}

export default Marquee
