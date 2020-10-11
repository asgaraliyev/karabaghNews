import React from "react";
export default function SearchIcon(props) {
  const { width, height, fill, classNamee } = props.info;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={fill}
      className={classNamee}
      x="0"
      y="0"
      enableBackground="new 0 0 28.931 28.932"
      version="1.1"
      viewBox="0 0 28.931 28.932"
      xmlSpace="preserve"
    >
      <path d="M28.344 25.518l-6.114-6.115a12.177 12.177 0 002.303-7.137c0-3.275-1.275-6.355-3.594-8.672A12.183 12.183 0 0012.266 0a12.176 12.176 0 00-8.673 3.594 12.183 12.183 0 00-3.592 8.672c0 3.276 1.275 6.356 3.592 8.674a12.187 12.187 0 008.673 3.594c2.599 0 5.067-.813 7.136-2.303l6.114 6.115c.392.391.902.586 1.414.586a2 2 0 001.414-3.414zM6.422 18.111c-1.562-1.562-2.421-3.639-2.421-5.846s.859-4.282 2.421-5.844c1.561-1.562 3.636-2.422 5.844-2.422s4.284.86 5.845 2.422c1.562 1.562 2.422 3.638 2.422 5.845s-.859 4.283-2.422 5.846c-1.562 1.562-3.636 2.42-5.845 2.42s-4.285-.86-5.844-2.421z"></path>
    </svg>
  );
}
