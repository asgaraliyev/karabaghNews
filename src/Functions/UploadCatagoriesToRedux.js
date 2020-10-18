import GettingCatagories from "./GettingCatagories";
import Store from "../Redux/SuperMarket/SuperMarket";
import { change_Catagories } from "../Redux/Actions/index";
const uploadCatagoriesToRedux = () => {
  GettingCatagories().then((result) => {
      
    Store.dispatch(change_Catagories(result));
  });
};
export default uploadCatagoriesToRedux;
