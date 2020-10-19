import React from "react";
import Image from "material-ui-image";
import ANewsContainer from "../../aNewsContainer/aNewsContainer";

export default function ImageComponent(props) {
  return (
    <div className="side" style={{ height: "200px" }}>
      {/* <div className="image-container">
        <Image src={photoLink} />
      </div> */}
      <ANewsContainer
        content={false}
        width={true}
        imageLink={props.image}
      ></ANewsContainer>
    </div>
  );
}
