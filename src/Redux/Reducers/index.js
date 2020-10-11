import { combineReducers } from "redux";
import { Catagories } from "./Catagories";
export const allReducers = combineReducers({
  catagories: Catagories,
});
