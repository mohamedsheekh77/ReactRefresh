// You’ll build a small app that combines props (data passed in) and state (data that changes).

// 🎯 Goal

// Create a component that displays a social media post with:

// A title (prop)

// A description (prop)

// A “Like” button that:

// Starts at 0 likes

// Increases the count each time you click

// Updates the UI instantly

import { useState } from "react";

const ProductCard = ({description, ProductName, ProductPrice}) => {
    return (
        <div className="ProductCard">
            <h2> {ProductName}</h2>
            <h1>{description}</h1>
            <p> {ProductPrice}</p>
        </div>

    )

} 

const ProductDescription = () => {
    return (
        <div className="Description">
            <description
            description ="Buy now, discount for sale"
            />
            <ProductName
            title = "MacBook Laptop "
            />
             <ProductPrice
            title = "£1599.99"
            />
        </div>
    )
}