export const BUY_PRODUCT = 'BUY_PRODUCT';

export const buyProduct = (product) => ({
    type: BUY_PRODUCT,
    payload: product,
});
