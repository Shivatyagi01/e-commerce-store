import React from 'react'
import './ShopByCollection.css'


const ShopByCollection = () => {
    const items = [
        {
            title: "iPhone",
            link: "#",
            image: "/public/uploads/products/iphone_17_pro.jpg"
        },
        {
            title: "Laptop",
            link: "#",
            image: "url-to-laptop-image"
        },
        {
            title: "Headphones",
            link: "#",
            image: "url-to-headphones-image"
        },
        {
            title: "Smart Watches",
            link: "#",
            image: "url-to-smartwatches-image"
        },
        {
            title: "Speaker",
            link: "#",
            image: "url-to-speaker-image"
        }
    ];
    return (
        <div className='shopByCollection s1'>
            <div className="container">
                <h2>Shop By Collection</h2>
                <div className="row">
                    {
                        items.map((item, index) => (
                            <div className="col" key={index}>
                                <div className="box">
                                    <h4>{item.title}</h4>
                                    <a href="#">icon</a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ShopByCollection;
