import React from "react";
export default function MenuIcon(props) {
  const { width, height, fill, classNamee } = props.info;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={fill}
      className={classNamee}
      viewBox="0 0 126 126"
    >
      <rect width="108" height="18" x="7" y="52" rx="9"></rect>
      <rect width="71" height="18" x="44" y="88" rx="9"></rect>
      <rect width="73" height="18" x="7" y="16" rx="9"></rect>
      <rect width="29" height="18" x="86" y="16" rx="9"></rect>
      <rect width="29" height="18" x="7" y="88" rx="9"></rect>
    </svg>
  );
}
