import React, { Component } from "react";
import SearchIcon from "@material-ui/icons/Search";
import CallMadeIcon from "@material-ui/icons/CallMade";
import { ListItem, List, ListItemIcon } from "@material-ui/core";
import "./scss/style.scss";
export default class SearchArea extends Component {
  render() {
    return (
      <>
        <div id="search-text-field">
          <div className="search-bar-and-button">
            <div className="search-bar">
              <input placeholder="Mobile App Design"></input>
            </div>
            <div className="search-button">
              <SearchIcon></SearchIcon>
            </div>
          </div>
        </div>
        <div id="search-result-area">
          <div className="result">
            <List>
              <ListItem button>
                <span
                  style={{
                    flex: 9,
                  }}
                >
                  mobile app design
                </span>
                <ListItemIcon
                  style={{
                    flex: 1,
                  }}
                >
                  <CallMadeIcon></CallMadeIcon>
                </ListItemIcon>
              </ListItem>
              <ListItem button>
                <span
                  style={{
                    flex: 9,
                  }}
                >
                  mobile app design
                </span>
                <ListItemIcon
                  style={{
                    flex: 1,
                  }}
                >
                  <CallMadeIcon></CallMadeIcon>
                </ListItemIcon>
              </ListItem>
              <ListItem button>
                <span
                  style={{
                    flex: 9,
                  }}
                >
                  mobile app design
                </span>
                <ListItemIcon
                  style={{
                    flex: 1,
                  }}
                >
                  <CallMadeIcon></CallMadeIcon>
                </ListItemIcon>
              </ListItem>
              <ListItem button>
                <span
                  style={{
                    flex: 9,
                  }}
                >
                  mobile app design
                </span>
                <ListItemIcon
                  style={{
                    flex: 1,
                  }}
                >
                  <CallMadeIcon></CallMadeIcon>
                </ListItemIcon>
              </ListItem>
            </List>
          </div>
        </div>
      </>
    );
  }
}
