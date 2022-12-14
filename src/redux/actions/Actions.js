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

export const searchProducts = (searchRequest) => {
    return {
        type : ActionTypes.SEARCH_PRODUCTS,
        payload : searchRequest
    }
}

export const addToCart = (request) => {
    return {
        type : ActionTypes.ADD_TO_CART,
        payload : request
    }
}

export const addToWishlist = (request) => {
    return {
        type : ActionTypes.ADD_TO_WISHLIST,
        payload : request
    }
}

export const sortProducts = (request) => {
    return {
        type : ActionTypes.SORT_PRODUCTS,
        payload : request
    }
}

