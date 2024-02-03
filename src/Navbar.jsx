import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
    return (
        <nav>
            <div>Магазин</div>
            <div>
                <Link to="/">Главная</Link>
                <Link to="/cart">Корзина ({cartCount})</Link>
            </div>
        </nav>
    );
};

const mapStateToProps = (state) => ({
    cartCount: state.cart.length,
});

export default connect(mapStateToProps)(Navbar);
