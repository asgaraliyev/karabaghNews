import firebase from "firebase";
import "firebase/firestore";
const Getting_A_Post_Function = async (link) => {
  let db = firebase.firestore();
  //   const result = await db
  //     .collection("posts")
  //     .doc("biwtTVtXe5dTZjRd0f6o")
  //     .get()
  //     .then((doc) => {
  //       return doc.data();
  //     });
  var docRef = db.collection("posts").doc(link);
  var info = {
    success: null,
    data: null,
    error: null,
  };
  var result = await docRef
    .get()
    .then(function (doc) {
      if (doc.exists) {
        info = {
          success: true,
          data: doc.data(),
          error: null,
        };
        return info;
      } else {
        info = {
          success: false,
          data: null,
          error: "There is no such a news",
        };
        return info;
      }
    })
    .catch(function (error) {
      info = {
        success: false,
        data: null,
        error: error,
      };
      return info;
    });
  return result;
};
export default Getting_A_Post_Function;
