// src/ProductList.jsx
import React from 'react';
import { connect } from 'react-redux';
import { buyProduct } from './redux/actions';

const ProductList = ({ products, buyProduct }) => {
    return (
        <div>
            <h2>Список товаров</h2>
            {products.map(product => (
                <div key={product.id}>
                    <p>{product.name}</p>
                    <p>{product.price} руб.</p>
                    <button onClick={() => buyProduct(product)}>Купить</button>
                </div>
            ))}
        </div>
    );
};

const mapStateToProps = (state) => ({
    products: state.products,
});

export default connect(mapStateToProps, { buyProduct })(ProductList);
