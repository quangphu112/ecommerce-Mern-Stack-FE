import productService from "../../services/product.service";
import {
    GET_PRODUCT_REQUEST,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAIL
} from "../constants/product.constants";

const getProduct = () => async (dispatch) => {
    try {
        dispatch({type: GET_PRODUCT_REQUEST})
        const products = productService.getAllProduct();
        dispatch({
            type: GET_PRODUCT_SUCCESS,
            payload: products
        })
    } catch (error) {
        dispatch({
            type: GET_PRODUCT_FAIL,
            payload: error
        })
    }
}

const productAction  = {
    getProduct
};

export default productAction;