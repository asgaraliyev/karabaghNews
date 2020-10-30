import React from "react";
import { List, ListItem } from "@material-ui/core";
import "./scss/style.scss";
import DashboardList from "./DashboardLists";
import { useDispatch } from "react-redux";
import { change_Dashboard_Contente_action } from "../../../../../Redux/Actions/index";
export default function DrawerA() {
  const dispatch = useDispatch();
  const change_Dashboard_Content = (contentName) => {
    contentName = contentName.toLowerCase();
    dispatch(change_Dashboard_Contente_action(contentName));
  };
  return (
    <div id="drawer-menu">
      <List>
        {DashboardList.map((listitem) => {
          return (
            <ListItem
              key={listitem.name}
              button
              onClick={() => {
                change_Dashboard_Content(listitem.name);
              }}
            >
              {listitem.name}
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
