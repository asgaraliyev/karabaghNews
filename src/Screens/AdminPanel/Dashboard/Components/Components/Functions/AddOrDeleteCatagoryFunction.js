import SuperMarket from "../../../../../../Redux/SuperMarket/SuperMarket";
import firebase from "firebase";
import "firebase/firestore";
const add_Catagory_Function = (data) => {
  const db = firebase.firestore();
  var catagories = db.collection("catagories").doc("catagories");

  if (data.type === "ADD") {
    const catagoryName = SuperMarket.getState().addCatagoryReducer;
    catagories.update({
      catagories: firebase.firestore.FieldValue.arrayUnion(
        catagoryName.catagory
      ),
    });
  } else if (data.type === "DELETE") {
    catagories.update({
      catagories: firebase.firestore.FieldValue.arrayRemove(data.data),
    });
    console.log(data.data, "deleted");
  }
};
export default add_Catagory_Function;
