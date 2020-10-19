import firebase from "firebase";
import "firebase/firestore";
const getting_Catagory_Posts = async (catagoryName) => {
  let db = firebase.firestore();
  const result = await db
    .collection("posts")
    .get()
    .then(function (posts) {
      var theData = [];
      posts.forEach(function (post) {
        if (post.data().catagory === catagoryName) {
          console.log(
            "getting_Catagory_Posts -> post.data().catagory",
            post.data().catagory
          );
          var info = {
            data: post.data(),
            date: post.data().time.toDate(),
          };
          theData.push(info);
        }
      });
      return theData;
    });
  return result;
};
export default getting_Catagory_Posts;
