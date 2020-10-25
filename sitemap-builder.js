require("babel-register");

const router = require("./src/routes").default;
const Sitemap = require("react-router-sitemap").default;

new Sitemap(router).build("https://karabakh-news.herokuapp.com/").save("./public/sitemap.xml");
