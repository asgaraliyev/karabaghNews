import firebase from "firebase";
import "firebase/firestore";
const getting_Avarage_Population = async () => {
  let db = firebase.firestore();
  const result = await db
    .collection("posts")
    .get()
    .then(function (posts) {
      var theData = [];
      posts.forEach(function (post) {
        theData.push(post.data().views);
      });
      return theData;
    });
  return result;
};
export default getting_Avarage_Population;
