import {
    GET_PRODUCT_REQUEST,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAIL
} from "../constants/product.constants";

const initialState = {
    data: null,
    loading: false,
    requesting: false
}

const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_PRODUCT_SUCCESS: 
            return {
                data: action.payload,
                loading: true,
                requesting: true
            }
        case GET_PRODUCT_FAIL: 
            return {
                ...state,
                loading: true,
                requesting: false
            }
        default: 
                return state;
    }
}

export default productReducer;