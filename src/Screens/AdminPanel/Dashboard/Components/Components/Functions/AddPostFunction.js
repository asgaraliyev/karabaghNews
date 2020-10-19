import Store from "../../../../../../Redux/SuperMarket/SuperMarket";
import firebase from "firebase";
import "firebase/firestore";
import { notification } from "antd";
const openNatfication = (info) => {
  notification[info.type]({
    message: info.title,
  });
};
const addPostFunction = async () => {
  const postInformations = Store.getState().addPostReducer;
  console.log("addPostFunction -> postInformations", postInformations);
  var db = firebase.firestore();
  var catagoryOfThePost = await db
    .collection("catagories")
    .get()
    .then(function (querySnapshot) {
      var theData = [];
      var theCatagory = postInformations.catagory;
      querySnapshot.forEach(function (doc) {
        theData = doc.data().catagories;
        console.log("addPostFunction -> theData", theData);
      });
      const isTheCatagoryExit = theData.includes(postInformations.catagory);
      console.log("addPostFunction -> isTheCatagoryExit", isTheCatagoryExit);
      if (!isTheCatagoryExit) {
        theCatagory = theData[0];
      }
      console.log("addPostFunction -> theCatagory", theCatagory);
      return theCatagory;
    });

  var thePost = {
    author: postInformations.author,
    body: postInformations.body,
    catagory: catagoryOfThePost,
    image: postInformations.image,
    time: firebase.firestore.Timestamp.fromDate(new Date()),
    title: postInformations.title,
    link: postInformations.link,
  };
  try {
    db.collection("posts")
      .doc(thePost.link)
      .set(thePost)
      .then(console.log("document successfully written!"));
  } catch (error) {
  console.log("addPostFunction -> error", error)
    
  }
};
export default addPostFunction;
