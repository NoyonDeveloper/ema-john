import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
    console.log(props.product);
    const { name, img, price, seller, stock, key } = props.product;
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <p className='product-name'><Link to={"/product/" + key}>{name}</Link></p>
                <p>${price}</p>
                <p><small>By: {seller}</small></p>
                <p><small>only {stock} left in stock - order soon</small></p>
                { props.showAddToCart === true && <button onClick={() => props.handelClick(props.product)} className='btn-cart'>Add to Cart</button>}
            </div>
        </div>
    );
};

export default Product;