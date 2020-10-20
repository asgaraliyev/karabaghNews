// import * as React from "react";
// import { Component } from "react";
// import { DataGrid, ColDef, ValueGetterParams } from "@material-ui/data-grid";
import * as firebase from "firebase";
import "firebase/firestore";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import Image from "material-ui-image";
import { Table, Radio, Divider, Button } from "antd";
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
    title: "Image",
    dataIndex: "image",
    render: (text) => <Image src={text} aspectRatio={16 / 9}></Image>,
  },
  {
    title: "Views",
    dataIndex: "views",
  },
  {
    title: "link",
    render: (text) => (
      <a href={`${window.location.origin}/news/${text}`}>{text}</a>
    ),
    dataIndex: "link",
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

const Demo = (props) => {
  var list = [];
  const [selected, setSelected] = useState([]);
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setSelected(selectedRows);
    },
  };

  props.data.map((item) => {
    var info = {
      id: item.id,
      key: item.id,
      title: item.data.title,
      views: item.data.views,
      image: item.data.image,
      link: item.data.link,
      catagory: item.data.catagory,
      author: item.data.author,
      date: String(item.date),
    };
    list.push(info);
  });
  const deleteHandler = () => {
    const db = firebase.firestore();
    selected.map((row) => {
      var result = window.confirm(
        "are you sure delete " + row.title + " post?"
      );
      if (result) {
        db.collection("posts")
          .doc(row.id)
          .delete()
          .then(function () {
            console.log("Document successfully deleted!");
          })
          .catch(function (error) {
            console.error("Error removing document: ", error);
          });
      }
    });
  };
  return (
    <div>
      <Button danger onClick={deleteHandler}>
        Delete
      </Button>
      {/* <Button onClick={editHandler}>Edit</Button> */}
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
