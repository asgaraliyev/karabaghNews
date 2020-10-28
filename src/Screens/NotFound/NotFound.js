import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import "./scss/style.scss";
import { Button } from "antd";
import Image from "material-ui-image";
import { HomeOutlined } from "@ant-design/icons";
import notFound from "./images/notFound.png";
import { Link } from "react-router-dom";
export default class NotFound extends Component {
  render() {
    return (
      <>
        <Header
          info={{
            type: "home",
          }}
        ></Header>
        <div id="error-area">
          <h1>404</h1>
          <h1>Oops!</h1>
          <h3>Page,Not found :(</h3>
          <Link to="/">
            <Button type="primary" icon={<HomeOutlined />}>
              Go Home
            </Button>
          </Link>
          {/* <img style={{ width: "100%" ,positon:"absolute",left:"0px"}} src={notFound}></img> */}
        </div>
      </>
    );
  }
}
