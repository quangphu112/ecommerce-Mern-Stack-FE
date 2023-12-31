import { combineReducers } from "redux";
import productReducer from "./product.reducer";

const reducers = combineReducers({
    product: productReducer
});

export default (state, action) => reducers(state, action)