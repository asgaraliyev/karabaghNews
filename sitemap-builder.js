require("babel-register");
var firebase = require("firebase");
var firebaseConfig = {
  apiKey: "AIzaSyC_CTtwYHxXSnp99LhrZsRl5HKoiHh_y2U",
  authDomain: "karabakhnews-ce982.firebaseapp.com",
  databaseURL: "https://karabakhnews-ce982.firebaseio.com",
  projectId: "karabakhnews-ce982",
  storageBucket: "karabakhnews-ce982.appspot.com",
  messagingSenderId: "912318790689",
  appId: "1:912318790689:web:2ebbf5c92ace9b68c87760",
  measurementId: "G-2717GSXERZ",
};
const router = require("./router").default;
const Sitemap = require("react-router-sitemap").default;
const filterConfig = {
  isValid: false,
  rules: [/\/auth/, /\*/],
};
var app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
db.collection("catagories")
  .doc("catagories")
  .get()
  .then((catagories) => {
    const listOfCatagories = catagories.data()["catagories"];
    db.collection("posts")
      .get()
      .then((posts) => {
        const listOfPosts = [];
        posts.forEach((post) => {
          listOfPosts.push(post.data().link);
        });

        const paramsConfig = {
          "/catagory/:catagoryName": [
            {
              catagoryName: listOfCatagories,
            },
          ],
          "/news/:newsName": [
            {
              newsName: listOfPosts,
            },
          ],
        };
        new Sitemap(router)
          .filterPaths(filterConfig)
          .applyParams(paramsConfig)
          .build("https://karabakh-news.herokuapp.com")
          .save("./public/sitemap.xml");
      });
  });
