import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import Catagories from "../../Components/Catagories/Catagories";
import Trending from "../../Components/Trending/Trending";
import Authors from "./Authors/Authors";
import EditorChoise from "./EditorChoise/EditorChoise";
import OtherNews from "../../Components/OtherNews/OtherNews";
import getting_Posts_Function from "../../Functions/GettingPosts";
export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
    var info = {
      data: {
        author: "Loading...",
        body: "Loading...",
        catagory: "Loading...",
        // TODO put a loading image to here
        image: "Photo",
        link: "",
        title: "Loading...",
      },
      date: Date(),
    };
    var listOfPosts = [];
    listOfPosts.push(info);
    this.setState(
      (this.state = {
        posts: listOfPosts,
      })
    );
  }
  componentDidMount() {
    const self = this;
    getting_Posts_Function().then((posts) => {
      self.setState(
        (self.state = {
          posts: posts,
        })
      );
    });
  }
  render() {
    console.log(this.state.posts);
    return (
      <div>
        <Header
          info={{
            type: "home",
            title: "News",
          }}
        ></Header>
        <Catagories></Catagories>
        <Trending></Trending>
        <Authors></Authors>
        <EditorChoise></EditorChoise>
        <OtherNews posts={this.state.posts}></OtherNews>
      </div>
    );
  }
}
