import React from 'react';
import { connect } from 'react-redux';

const CartItem = ({ cart }) => {
    return (
        <div>
            <h2>Корзина</h2>
            {cart.map(item => (
                <div key={item.id}>
                    <p>{item.name}</p>
                    <p>{item.price} руб.</p>
                </div>
            ))}
        </div>
    );
};

const mapStateToProps = (state) => ({
    cart: state.cart,
});

export default connect(mapStateToProps)(CartItem);
