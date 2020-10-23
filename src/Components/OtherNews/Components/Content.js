import React from "react";
import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
TimeAgo.addDefaultLocale(en);
export default function Content(props) {
  var body = null;
  function extractContent(s) {
    var span = document.createElement("span");
    span.innerHTML = s;
    return span.textContent || span.innerText;
  }
  body = extractContent(props.body);

  // var allListOfBody = body.replace(/([.?!])\s*(?=[A-Z])/g, "|").split("|");
  // body = allListOfBody.slice(0, 1);
  // if (body[0].length < 200) {
  //   body = allListOfBody.slice(0, 2);
  // }
  body = body.slice(0, 150);
  body = body.split(" ");
  body = body.slice(0, body.length - 2);
  var newBody="";
  body.map((word) => {
    newBody+=word+" "
  })
  body=newBody;
  body += "...";
  return (
    <div className="side">
      <div className="content">
        <h5>{props.title}</h5>
        <p className="description">{body}</p>

        <ReactTimeAgo date={props.time} locale="az-Az" timeStyle="round" />
      </div>
    </div>
  );
}
