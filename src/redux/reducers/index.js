import { productReducer } from "./Reducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  productReducer: productReducer,
});

export default rootReducer;
