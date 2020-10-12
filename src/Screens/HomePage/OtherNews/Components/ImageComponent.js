import React from "react";
import Image from "material-ui-image";

export default function ImageComponent() {
    const photoLink =
    "https://www.planetware.com/wpimages/2019/09/top-places-to-visit-in-the-world-machu-picchu-peru.jpg";
  return (
    <div className="side">
      <div className="image-container">
        <Image src={photoLink} />
      </div>
    </div>
  );
}
