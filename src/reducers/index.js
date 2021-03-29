import { combineReducers } from "redux";
import TableData from "./reducer_tableData";

const rootReducer = combineReducers({
  tableData: TableData
});

export default rootReducer;
