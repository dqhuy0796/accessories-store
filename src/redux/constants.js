export const UserActionTypes = Object.freeze({
    login: 'LOG_IN',
    logout: 'LOG_OUT',
    refresh: 'REFRESH',
    ProfileUpdate: 'UPDATE_PROFILE',
    toggleDarkmode: 'TOGGLE_DARKMODE',
});

export const CartActionTypes = Object.freeze({
    open: 'OPEN_CART',
    close: 'CLOSE_CART',
    addItem: 'ADD_ITEM',
    removeItem: 'REMOVE_ITEM',
    increaseItem: 'INCREASE_ITEM',
    descreaseItem: 'DESCREASE_ITEM',
    removeAll: 'REMOVE_ALL_ITEMS',
});
