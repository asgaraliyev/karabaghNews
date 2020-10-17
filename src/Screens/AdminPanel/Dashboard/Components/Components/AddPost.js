import React, { Component } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { TextField, NativeSelect, List, ListItem } from "@material-ui/core";
import firebase from "firebase";
import "firebase/firestore";
export class UncontrolledEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      listOfCategories: [],
      title: "",
      link: "",
      author: "",
    };
  }

  onEditorStateChange: Function = (editorState) => {
    this.setState({
      editorState,
    });
  };
  componentDidMount() {
    this.getData();
  }
  getData() {
    let self = this;
    let db = firebase.firestore();
    db.collection("catagories")
      .get()
      .then(function (querySnapshot) {
        var theData = [];
        querySnapshot.forEach(function (doc) {
          theData = doc.data().catagories;
        });
        self.setState(
          (self.state = {
            listOfCategories: theData,
          })
        );
      });
  }
  render() {
    const { editorState } = this.state;
    function convertString(phrase) {
      var maxLength = 100;

      var returnString = phrase.toLowerCase();
      //Convert Characters
      returnString = returnString.replace(/ö/g, "o");
      returnString = returnString.replace(/ç/g, "c");
      returnString = returnString.replace(/ş/g, "s");
      returnString = returnString.replace(/ı/g, "i");
      returnString = returnString.replace(/ğ/g, "g");
      returnString = returnString.replace(/ü/g, "u");
      returnString = returnString.replace(/ə/g, "e");

      // if there are other invalid chars, convert them into blank spaces
      returnString = returnString.replace(/[^a-z0-9\s-]/g, "");
      // convert multiple spaces and hyphens into one space
      returnString = returnString.replace(/[\s-]+/g, " ");
      // trims current string
      returnString = returnString.replace(/^\s+|\s+$/g, "");
      // cuts string (if too long)
      if (returnString.length > maxLength)
        returnString = returnString.substring(0, maxLength);
      // add hyphens
      returnString = returnString.replace(/\s/g, "-");

      alert(returnString);
    }
    const titleChanged = (e) => {
      this.setState(
        (this.state = {
          title: e.target.value,
        })
      );
      console.log(this.state.title);

      const link = this.state.title.toLocaleLowerCase().split(" ");
      var theLink = "";
      link.map((item) => {
        if (item != "") {
          theLink += item + "-";
        }
      });
      theLink = theLink.substring(0, theLink.length - 1);
      this.setState(
        (this.state = {
          link: theLink,
        })
      );
    };
    const author_Changed = (e) => {
      this.setState(
        (this.state = {
          author: e.target.value,
        })
      );
    };
    return (
      <div id="padding-for-editor">
        <List>
          <ListItem>
            <TextField
              className="text-field"
              label="Title"
              variant="outlined"
              onChange={titleChanged}
            />
          </ListItem>
          <ListItem>
            <TextField
              onChange={author_Changed}
              className="text-field"
              label="Author"
              variant="outlined"
            />
          </ListItem>
          <ListItem>
            <TextField
              className="text-field"
              label="Link"
              value={this.state.link}
              variant="outlined"
            />
          </ListItem>
          <ListItem>
            <NativeSelect
              className="text-field"
              value="Catagory"
              inputProps={{
                name: "Catagory",
                id: "age-native-helper",
              }}
            >
              {this.state.listOfCategories.map((category) => {
                return (
                  <option key={category} value={category}>
                    {category}
                  </option>
                );
              })}
            </NativeSelect>
          </ListItem>
        </List>
        <Editor
          className="the-editor"
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
        />
      </div>
    );
  }
}
