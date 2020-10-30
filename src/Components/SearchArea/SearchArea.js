import React, { Component} from "react";
import SearchIcon from "@material-ui/icons/Search";
import CallMadeIcon from "@material-ui/icons/CallMade";
import { ListItem, List, ListItemIcon } from "@material-ui/core";
import getAllPosts from "../../Functions/GettingPosts";
import "./scss/style.scss";
import { Link } from "react-router-dom";
import "firebase/firestore";
import SuperMarket from "../../Redux/SuperMarket/SuperMarket";
import { change_Menu_Stuation_Action } from "../../Redux/Actions/index";
export default class SearchArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null,
    };
  }
  render() {
    const self = this;
    const searchChangeHandler = (e) => {
      const searched = e.target.value.toLowerCase();
      const searchedArray = searched.split(" ");
      const allPosts = [];
      getAllPosts().then((posts) => {
        posts.map((post) => {
          const theTitle = post.data.title.toLowerCase();
          var wordCounter = 0;
          var isThere = false;
          searchedArray.map((word) => {
            if (theTitle.indexOf(word) > -1) {
              isThere = true;
              wordCounter += 1;
            }
          });
          if (isThere) {
            var info = {
              countedWord: wordCounter,
              data: post.data,
              date: post.date,
            };
            allPosts.push(info);
          }
        });
        allPosts.sort(function (a, b) {
          return b.countedWord - a.countedWord;
        });
        self.setState(
          (self.state = {
            posts: allPosts,
          })
        );
      });
    };
    const closeDrawer = (link) => {
      SuperMarket.dispatch(change_Menu_Stuation_Action(null));
    };
    return (
      <>
        <div id="search-text-field">
          <div className="search-bar-and-button">
            <div className="search-bar">
              <input
                placeholder="Search something..."
                onChange={searchChangeHandler}
              ></input>
            </div>
            <div className="search-button">
              <SearchIcon></SearchIcon>
            </div>
          </div>
        </div>
        <div id="search-result-area">
          <div className="result">
            <List>
              {this.state.posts !== null ? (
                <>
                  {this.state.posts.map((post) => {
                    return (
                      <Link
                        key={post.data.link}
                        to={`/news/${post.data.link}`}
                        onClick={() => closeDrawer(`/news/${post.data.link}`)}
                      >
                        <ListItem button>
                          <span
                            style={{
                              flex: 9,
                            }}
                          >
                            {post.data.title}
                          </span>
                          <ListItemIcon
                            style={{
                              flex: 1,
                              paddingLeft: "51px",
                            }}
                          >
                            <CallMadeIcon></CallMadeIcon>
                          </ListItemIcon>
                        </ListItem>
                      </Link>
                    );
                  })}
                </>
              ) : null}
            </List>
          </div>
        </div>
      </>
    );
  }
}
