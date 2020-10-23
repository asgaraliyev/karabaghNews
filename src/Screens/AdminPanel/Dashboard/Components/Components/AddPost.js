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
import { Upload, message, Checkbox } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import gettingAPost from "../../../../../Functions/GettingAPosts";
import Chance from "chance";
import Image from "material-ui-image";
import "antd/dist/antd.css";
import { notification, Progress } from "antd";
import htmlToDraft from "html-to-draftjs";
import { ContentState } from "draft-js";
const openNotificationWithIcon = (info) => {
  notification[info.type]({
    message: info.title,
  });
};
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
      image: null,
      isAuthor: true,
      views: null,
      editPost: null,
    };
  }

  onEditorStateChange: Function = (editorState) => {
    this.setState({
      editorState,
    });
  };
  componentDidMount() {
    this.getData();
    if (this.props.edit) {
      gettingAPost(this.props.link).then((post) => {
        if (post.success) {
          console.log("UncontrolledEditor -> componentDidMount -> post", post);

          const blocksFromHtml = htmlToDraft(post.data.body);
          const { contentBlocks, entityMap } = blocksFromHtml;
          const contentState = ContentState.createFromBlockArray(
            contentBlocks,
            entityMap
          );
          const editorState = EditorState.createWithContent(contentState);
          this.setState(
            (this.state = {
              title: post.data.title,
              link: post.data.link,
              author: post.data.author,
              catagory: post.data.catagory,
              image: post.data.image,
              isAuthor: post.data.isAuthor,
              views: post.data.views,
              editorState: editorState,
            })
          );
        }
      });
    }
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
    if (this.props.save) {
      var info = {
        author: this.state.author,
        body: this.state.htmlContent,
        catagory: this.state.catagory,
        image: this.state.image,
        title: this.state.title,
        link: this.state.link,
        views: this.state.views,
        isAuthor: this.state.isAuthor,
      };
      this.props.dispatch(add_Post_Action(info));
    }
    console.log(this.state);
    const self = this;
    const props = {
      name: "file",
      multiple: false,
      action: self.state.image,
      onChange(info) {
        if (info.file.status === "error") {
          try {
            const file = info.file.originFileObj;
            var randomName;
            if (self.state.link !== "") {
              randomName = self.state.link;
            } else {
              randomName = chance.android_id();
            }
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
                self.setState(
                  (this.state = {
                    progressNumber: Math.floor(progress),
                  })
                );
                switch (snapshot.state) {
                  case firebase.storage.TaskState.PAUSED: // or 'paused'
                    break;
                  case firebase.storage.TaskState.RUNNING: // or 'running'
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
                    openNotificationWithIcon({
                      type: "success",
                      title: "Photo is uploaded !",
                    });
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
          } catch (error) {}
        }
      },
    };

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
    const changedChekBoxHandler = (e) => {
      this.setState(
        (this.state = {
          isAuthor: e.target.checked,
        })
      );
      console.log(this.state);
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
          {this.state.progressNumber ? (
            <Progress percent={this.state.progressNumber} />
          ) : null}
          <Dragger {...props}>
            {this.state.image !== null ? (
              <Image aspectRatio={16 / 9} src={this.state.image}></Image>
            ) : (
              <div>
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
              </div>
            )}
          </Dragger>
          <TextField
            value={this.state.title}
            className="text-field"
            label="Title"
            variant="outlined"
            onChange={titleChanged}
          />
          <TextField
            value={this.state.author}
            onChange={author_Changed}
            className="text-field"
            label="Author"
            variant="outlined"
          />

          <TextField
            value={this.state.link}
            className="text-field"
            label="Link"
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
          <Checkbox
            checked={this.state.isAuthor}
            onChange={changedChekBoxHandler}
          >
            Author?
          </Checkbox>
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
