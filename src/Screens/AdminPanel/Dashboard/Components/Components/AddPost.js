import React, { Component } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { TextField, NativeSelect, List, ListItem } from "@material-ui/core";
import firebase from "firebase";
import "firebase/firestore";
import "firebase/storage";
import draftToHtml from "draftjs-to-html";
import { add_Post_Action } from "../../../../../Redux/Actions/index";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import Chance from "chance";
import "antd/dist/antd.css";
const chance = new Chance();
const { Dragger } = Upload;

export class UncontrolledEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      listOfCategories: [],
      title: "",
      link: "",
      author: "",
      catagory: "Catagory",
      htmlContent: "",
      image: "",
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
    const self = this;
    const props = {
      name: "file",
      multiple: true,
      action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
      onChange(info) {
        const { status } = info.file;
        if (status !== "uploading") {
          try {
            const file = info.fileList[0].originFileObj;
            console.log("onChange -> file", file);
            var randomName;
            if (self.state.link !== "") {
              randomName = self.state.link;
            } else {
              randomName = chance.android_id();
            }
            console.log(randomName);
            var storageRef = firebase.storage().ref();
            var uploadTask = storageRef
              .child("postTitles/" + randomName)
              .put(file);
            uploadTask.on(
              "state_changed",
              function (snapshot) {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                var progress =
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + "% done");
                switch (snapshot.state) {
                  case firebase.storage.TaskState.PAUSED: // or 'paused'
                    console.log("Upload is paused");
                    break;
                  case firebase.storage.TaskState.RUNNING: // or 'running'
                    console.log("Upload is running");
                    break;
                }
              },
              function (error) {
                // Handle unsuccessful uploads
              },
              function () {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                uploadTask.snapshot.ref
                  .getDownloadURL()
                  .then(function (downloadURL) {
                    self.setState(
                      (self.state = {
                        image: downloadURL,
                      })
                    );
                  });
              }
            );
            var uploadUrl = uploadTask;
            console.log(
              "UncontrolledEditor -> onChange -> uploadUrl",
              uploadUrl
            );
          } catch (error) {
            console.log("UncontrolledEditor -> onChange -> error", error);
          }
        }
        if (status === "done") {
          message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === "error") {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };
    if (this.props.save) {
      var info = {
        author: this.state.author,
        body: this.state.htmlContent,
        catagory: this.state.catagory,
        image: this.state.image,
        title: this.state.title,
        link: this.state.link,
      };
      this.props.dispatch(add_Post_Action(info));
    }
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
      return returnString;
    }
    const titleChanged = (e) => {
      this.setState(
        (this.state = {
          title: e.target.value,
        })
      );

      const converted = convertString(this.state.title);
      if (converted) {
        const link = converted.toLocaleLowerCase().split(" ");
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
      }
    };
    const author_Changed = (e) => {
      this.setState(
        (this.state = {
          author: e.target.value,
        })
      );
    };
    const catagory_Changed_Handler = (e) => {
      this.setState(
        (this.state = {
          catagory: e.target.value,
        })
      );
    };
    const onContentStateChange = (contentState) => {
      this.setState(
        (this.state = {
          htmlContent: draftToHtml(contentState),
        })
      );
    };
    return (
      <div id="padding-for-editor">
        <List>
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibit from
              uploading company data or other band files
            </p>
          </Dragger>
          <TextField
            className="text-field"
            label="Title"
            variant="outlined"
            onChange={titleChanged}
          />
          <TextField
            onChange={author_Changed}
            className="text-field"
            label="Author"
            variant="outlined"
          />
          <TextField
            className="text-field"
            label="Link"
            value={this.state.link}
            variant="outlined"
          />
          <NativeSelect
            className="text-field"
            onChange={catagory_Changed_Handler}
            inputProps={{
              name: "Catagory",
            }}
          >
            <option key="catagory" value={this.state.catagory}>
              {this.state.catagory}
            </option>

            {this.state.listOfCategories.map((category) => {
              return (
                <option key={category} value={category}>
                  {category}
                </option>
              );
            })}
          </NativeSelect>
        </List>
        <Editor
          className="the-editor"
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onContentStateChange={(content) => {
            onContentStateChange(content);
          }}
          onEditorStateChange={this.onEditorStateChange}
        />
      </div>
    );
  }
}
