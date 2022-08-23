import ActionTypes from '../constants/ActionTypes';

export const displayProducts = (products) => {
    return {
        type : ActionTypes.DISPLAY_PRODUCTS,
        payload : products
    }
}

export const addProduct = (product) => {
    return {
        type : ActionTypes.ADD_PRODUCT,
        payload : product
    }
}
export const editProduct = (product) => {
    return {
        type : ActionTypes.EDIT_SELECTED_PRODUCT,
        payload : product
    }
}

export const deleteProduct = (productId) => {
    return {
        type : ActionTypes.DELETE_SELECTED_PRODUCT,
        payload : productId
    }
}