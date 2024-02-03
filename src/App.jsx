import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import Routes
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './Navbar';
import ProductList from './ProductList';
import CartItem from './CartItem';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Navbar />
                    <Routes>  {/* Use Routes as the parent */}
                        <Route path="/" element={<ProductList />} />
                        <Route path="/cart" element={<CartItem />} />
                    </Routes>
                </div>
            </Router>
        </Provider>
    );
};

export default App;
