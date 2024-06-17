export const buyCoins = (amount) => {
    return {
        type: 'BUY_COINS',
        payload: amount
    };
};

export const sellCoins = (amount) => {
    return {
        type: 'SELL_COINS',
        payload: amount
    };
};