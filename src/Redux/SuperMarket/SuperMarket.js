import { createStore } from "redux";
import {allReducers} from '../Reducers/index'

const SuperMarket = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default SuperMarket;
