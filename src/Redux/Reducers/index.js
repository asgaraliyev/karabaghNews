import { combineReducers } from "redux";
import { Catagories } from "./Catagories";
import { change_Menu_Stuation } from "./MenuIsOpen";
import { more_Catagories_Reducer } from "./MoreCatagories";
import { firebaseReducer } from "./Firebase";
import DashboardContent from "./DashboardContent";
export const allReducers = combineReducers({
  catagories: Catagories,
  theMenu: change_Menu_Stuation,
  moreCatagories: more_Catagories_Reducer,
  firebaseReducer: firebaseReducer,
  dashboardContent: DashboardContent,
});
