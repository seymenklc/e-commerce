export const calcTotal = (cart) => {
    return cart
        .reduce((total, item) => total += item.price * item.qty, 0)
        .toFixed(2);
};