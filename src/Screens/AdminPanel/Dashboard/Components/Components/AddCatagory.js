import React, { Component } from "react";
import { Input } from "antd";
import { AppstoreAddOutlined } from "@ant-design/icons";
import SuperMarket from "../../../../../Redux/SuperMarket/SuperMarket";
import { add_New_Catagory_Action } from "../../../../../Redux/Actions/index";
export default class AddCatagory extends Component {
  render() {
    const onChangeHandler =(e)=>{
      SuperMarket.dispatch(add_New_Catagory_Action(e.target.value));

    }
    return (
      <div>
        <br></br>
        <br></br>
        <br></br>
        <Input
          onChange={onChangeHandler}
          size="large"
          placeholder="Add Catgory"
          prefix={<AppstoreAddOutlined />}
        />
      </div>
    );
  }
}
