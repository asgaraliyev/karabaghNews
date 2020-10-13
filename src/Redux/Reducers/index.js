import { combineReducers } from "redux";
import { Catagories } from "./Catagories";
import {change_Menu_Stuation} from './MenuIsOpen'
export const allReducers = combineReducers({
  catagories: Catagories,
  theMenu:change_Menu_Stuation,
});
