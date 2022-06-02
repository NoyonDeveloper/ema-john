import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import fakeData from '../../fakeData/products';
import './Shop.css';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';

const Shop = () => {
    // console.log(fakeData);
    const first10 = fakeData.slice(3, 13);
    console.log(first10);
    const [product, setProduct] = useState(first10);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const saveCart = getStoredCart();
        const productKey = Object.keys(saveCart);
        const previusCart = productKey.map((exestingKey) => {
            const product = fakeData.find(pd => pd.key === exestingKey);
            product.lenght = saveCart[exestingKey.length];
            return product;
        })
        setCart(previusCart);

    }, []);
    
    const handelClick = (product) => {
        console.log("Click Me Add To cart", product);
        const newCart = [...cart, product];
        setCart(newCart);
        const sameProduct = newCart.filter(pd => pd.key === product.key);
        const count = sameProduct;
        addToDb(product.key, count);
    }
    return (
        <div>
            <div className="shop-container">
                {
                    product.map(product => <Product showAddToCart={true} product={product} handelClick={handelClick}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;