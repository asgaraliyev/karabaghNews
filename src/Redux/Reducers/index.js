import { combineReducers } from "redux";
import { Catagories } from "./Catagories";
import { change_Menu_Stuation } from "./MenuIsOpen";
import { more_Catagories_Reducer } from "./MoreCatagories";
import { firebaseReducer } from "./Firebase";
import DashboardContent from "./DashboardContent";
import { change_Dialog_Content_Reducer } from "./DialogReducer";
import { add_Post_Reducer } from "./Firebase";
import AddNewCatagory from "./AddNewCatagory";
export const allReducers = combineReducers({
  catagories: Catagories,
  theMenu: change_Menu_Stuation,
  moreCatagories: more_Catagories_Reducer,
  firebaseReducer: firebaseReducer,
  dashboardContent: DashboardContent,
  dialogReducer: change_Dialog_Content_Reducer,
  addPostReducer: add_Post_Reducer,
  addCatagoryReducer: AddNewCatagory,
});
