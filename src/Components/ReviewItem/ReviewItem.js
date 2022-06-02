import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    console.log(props);
    const {name, price, key} = props.product;
    return (
        <div className='review-item'>
            <p className='product-name'>{name}</p>
            <p>Price: ${price}</p>
            <button onClick={() => props.removeProduct(key)}>Remove</button>
        </div>
    );
};

export default ReviewItem;