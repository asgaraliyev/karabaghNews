import Store from "../../../../../../Redux/SuperMarket/SuperMarket";
import firebase from "firebase";
import "firebase/firestore";
const  addPostFunction = async  () => {
  const postInformations = Store.getState().addPostReducer;

  var db = firebase.firestore();
  var catagoryOfThePost =await db
    .collection("catagories")
    .get()
    .then(function (querySnapshot) {
      var theData = [];
      var theCatagory;
      querySnapshot.forEach(function (doc) {
        theData = doc.data().catagories;
      });
      const isTheCatagoryExit = theData.includes(postInformations.catagory);
      if (!isTheCatagoryExit) {
        theCatagory = theData[0];
      }
      return theCatagory;
    });
  

  db.collection("posts").add({
    author: postInformations.author,
    body: postInformations.body,
    catagory: catagoryOfThePost,
    image: postInformations.image,
    time: firebase.firestore.Timestamp.fromDate(new Date()),
    title: postInformations.title,
    link: postInformations.link,
  });
};
export default addPostFunction;
