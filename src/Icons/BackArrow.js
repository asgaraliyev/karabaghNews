import React from "react";
export default function BackArrow(props) {
  const { width, height, fill, classNamee } = props.info;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 384 384"
      version="1.1"
      viewBox="0 0 384 384"
      xmlSpace="preserve"
      width={width}
      height={height}
      className={classNamee}
      fill={fill}

    >
      <path d="M384 170.667L81.707 170.667 158.187 94.187 128 64 0 192 128 320 158.187 289.813 81.707 213.333 384 213.333z"></path>
    </svg>
  );
}
