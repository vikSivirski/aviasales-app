import { combineReducers } from "redux";
import sortingReducer from "./sortingReducer";
import filterReducer from "./filterReducer";

const rootReducer = combineReducers({
    sorting: sortingReducer,
    filter: filterReducer
});

export default rootReducer;