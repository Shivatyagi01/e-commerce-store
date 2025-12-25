import React from 'react'
import './NewIn.css'


const NewIn = () => {
    const items = [
        {
            title: "iPhone",
            link: "#",
            image: "/uploads/products/iphone_17_pro.jpg",
            discountedprice: "899.00",
            price: "999.00"
        },
        {
            title: "Laptop",
            link: "#",
            image: "/uploads/products/Macbook.jpg",
            discountedprice: "899.00",
            price: "999.00"
        },
        {
            title: "Headphones",
            link: "#",
            image: "/uploads/products/iPad_pro.jpg",
            discountedprice: "899.00",
            price: "999.00"
        },
        {
            title: "Smart Watches",
            link: "#",
            image: "/uploads/products/watch_se.jpg",
            discountedprice: "899.00",
            price: "999.00"
        },
        {
            title: "Speaker",
            link: "#",
            image: "/uploads/products/apple_watch_ultra.jpg",
            discountedprice: "899.00",
            price: "999.00"
        }
    ];
    return (
        <div className='newin s1'>
            <div className="container">
                <h2>New In</h2>
                <div className="row">
                    {
                        items.map((item, index) => (
                            <div className="col" key={index}>
                                <div className="newinbox">
                                    <img src={item.image} alt="" />
                                    <h4>{item.title}</h4>
                                    <p>${item.discountedprice} <span>{item.price}</span></p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default NewIn;