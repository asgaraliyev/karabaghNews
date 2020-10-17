// import * as React from "react";
// import { Component } from "react";
// import { DataGrid, ColDef, ValueGetterParams } from "@material-ui/data-grid";

import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Table, Radio, Divider } from "antd";
const columns = [
  {
    title: "id",
    dataIndex: "id",
  },
  {
    title: "title",
    dataIndex: "title",
  },
  {
    title: "catagory",
    dataIndex: "catagory",
  },
  {
    title: "author",
    dataIndex: "author",
  },
  {
    title: "date",
    dataIndex: "date",
  },
];
 // rowSelection object indicates the need for row selection

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
};

const Demo = (props) => {
  var list = [];
  props.data.map((item) => {
    var info = {
      id: item.id,
      key: item.id,
      title: item.data.title,
      catagory: item.data.catagory,
      author: item.data.author,
      date: String(item.date),
    };
    list.push(info);

    
  });
  return (
    <div>
      <Table
        rowSelection={{
          ...rowSelection,
        }}
        columns={columns}
        dataSource={list}
      />
    </div>
  );
};

export default Demo;
