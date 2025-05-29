import { combineReducers } from "redux";

import ticketsReduser from "./ticketsReducer";
import sortingReducer from "./sortingReducer";
import filterReducer from "./filterReducer";

const rootReducer = combineReducers({
    tickets: ticketsReduser,
    sorting: sortingReducer,
    filter: filterReducer
});

export default rootReducer;