import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import Catagories from "../../Components/Catagories/Catagories";
import Trending from "../../Components/Trending/Trending";
import Authors from "./Authors/Authors";
import EditorChoise from "./EditorChoise/EditorChoise";
import OtherNews from "../../Components/OtherNews/OtherNews";
import getting_Posts_Function from "../../Functions/GettingPosts";
import Loader from "../../Images/loader.webp";
import ReactGA from "react-ga";
ReactGA.initialize("G-250509579");
export default class HomePage extends Component {
  constructor(props) {
    super(props);
    var listOfPosts = [];

    for (let i = 0; i < 15; i++) {
      var info = {
        data: {
          author: "Loading...",
          body: "Loading...",
          catagory: "Loading...",
          // TODO put a loading image to here from website itself
          image: Loader,
          link: String(i),
          title: "Loading...",
        },
        date: Date(),
      };
      listOfPosts.push(info);
    }
    this.state = {
      posts: listOfPosts,
    };
  }
  componentDidMount() {
    const self = this;
    ReactGA.pageview(window.location.pathname);
    getting_Posts_Function().then((posts) => {
      self.setState(
        (self.state = {
          posts: posts,
        })
      );
    });
  }
  render() {
    return (
      <div>
        <Header
          info={{
            type: "home",
            title: "News",
          }}
        ></Header>
        <Catagories></Catagories>
        <Trending posts={this.state.posts}></Trending>
        <Authors posts={this.state.posts}></Authors>
        <EditorChoise posts={this.state.posts}></EditorChoise>
        <OtherNews posts={this.state.posts}></OtherNews>
      </div>
    );
  }
}
