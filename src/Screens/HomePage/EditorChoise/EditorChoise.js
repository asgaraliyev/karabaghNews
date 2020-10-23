import React, { useEffect, useState } from "react";
import "./scss/style.scss";
import Image from "material-ui-image";
import { makeStyles } from "@material-ui/core/styles";
import MedalIcon from "../../../Icons/MedalIcon";
import Avatar from "@material-ui/core/Avatar";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ANewsContainer from "../../../Components/aNewsContainer/aNewsContainer";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));
export default function EditorChoise(props) {
  const { posts } = props;
  const [thePostItSelf, setthePostItSelf] = useState(null);
  const [description, setDescription] = useState(null);
  function findEditorChoice() {
    var maxViews = 0;
    posts.map((post) => {
      if (post.data.views) {
        maxViews = Math.max(maxViews, post.data.views);
      }
    });
    if (maxViews !== 0) {
      return maxViews;
    } else {
      return null;
    }
  }
  useEffect(() => {
    if (findEditorChoice()) {
      const maxViewsValue = findEditorChoice();
      if (maxViewsValue !== null) {
        posts.map((post) => {
          if (post.data.views === maxViewsValue) {
            setthePostItSelf(post);
            function extractContent(s) {
              var span = document.createElement("span");
              span.innerHTML = s;
              return span.textContent || span.innerText;
            }
            var body = extractContent(post.data.body);
            body = body.slice(0, 200);
            body = body.split(" ");
            body = body.slice(0, body.length - 2);
            var newBody = "";
            body.map((word) => {
              newBody += word + " ";
            });
            body = newBody;
            body += "...";
            var description = body;
            setDescription(description);
          }
        });
      }
    }
  }, [findEditorChoice()]);

  const classes = useStyles();
  const avatarPhoto =
    "https://pm1.narvii.com/6310/b40b659a7a5a6ba79fe648749c050b0e76ffff5d_128.jpg";
  return (
    <>
      {thePostItSelf !== null ? (
        <div id="editor-choise">
          <div className="photo side">
            <ANewsContainer
              width={true}
              content={false}
              imageLink={thePostItSelf.data.image}
            ></ANewsContainer>
          </div>
          <div className="content side">
            <div>
              <MedalIcon
                info={{
                  classNamee: "",
                  fill: "",
                  width: "20px",
                  height: "20px",
                }}
              ></MedalIcon>
              <p className="editor-choice">Editor Choice</p>
            </div>
            <div>
              <h4 className="title">{thePostItSelf.data.title}</h4>
              <p className="description">{description}</p>
            </div>
            <div className="about-author">
              <span className="display-inline-block">
                <Avatar
                  alt={thePostItSelf.data.author}
                  src={avatarPhoto}
                  className={classes.small}
                />
              </span>
              <span className="display-inline-block">
                <p className="profile-title">{thePostItSelf.data.author}</p>
              </span>
              <span className="display-inline-block icon">
                <MoreHorizIcon></MoreHorizIcon>
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
