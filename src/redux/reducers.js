import { BUY_PRODUCT } from './actions';
import productsData from '../products.json';

const initialState = {
    cart: [],
    products: productsData,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_PRODUCT:
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        default:
            return state;
    }
};

export default rootReducer;
