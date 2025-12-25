import React from 'react'
import './Brands.css'

const Brands = () => {
    const images = [
        "/images/apple.svg",
        "/images/sony.svg",
        "/images/oppo.jpg",
        "/images/samsung.png",
    ];
    return (
        <div className="slider">
            <div className="container">
                <div className="row">
                    {images.map((img, index) => (
                        <div className="slide col-3" key={index}>
                            <img src={img} alt={`slide-${index}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Brands
