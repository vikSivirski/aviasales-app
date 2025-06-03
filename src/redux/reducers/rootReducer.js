import { combineReducers } from "redux";

import ticketsReduser from "./ticketsReducer";
import sortingReducer from "./sortingReducer";
import filterReducer from "./filterReducer";
import moreBtnReducer from "./moreBtnReducer";

const rootReducer = combineReducers({
    moreTickets: moreBtnReducer,
    tickets: ticketsReduser,
    sorting: sortingReducer,
    filter: filterReducer
});

export default rootReducer;