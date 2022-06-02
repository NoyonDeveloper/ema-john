import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import fakeData from '../../fakeData/products';
import Product from '../Product/Product';

const ProductDetiles = () => {
    const {productKey} = useParams();
    const product = fakeData.find(pd => pd.key === productKey);
    console.log(product);
    return (
        <div>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetiles;