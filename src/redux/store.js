import { createStore, applyMiddleware } from "redux";
// import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
// import reducers from "./reducers";

const middleware = [thunk]
export const store = createStore(
    // reducers,
    applyMiddleware(...middleware)
)