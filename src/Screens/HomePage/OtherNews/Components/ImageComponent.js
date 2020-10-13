import React from "react";
import Image from "material-ui-image";
import ANewsContainer from "../../../../Components/aNewsContainer/aNewsContainer";

export default function ImageComponent() {
    const photoLink =
    "https://www.planetware.com/wpimages/2019/09/top-places-to-visit-in-the-world-machu-picchu-peru.jpg";
  return (
    <div className="side" style={{height:"200px"}}>
      {/* <div className="image-container">
        <Image src={photoLink} />
      </div> */}
      <ANewsContainer content={false}></ANewsContainer>
    </div>
  );
}
