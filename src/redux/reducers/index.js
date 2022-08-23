import { productReducer, searchReducer } from "./Reducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  productReducer: productReducer,
  searchReducer: searchReducer
});

export default rootReducer;
