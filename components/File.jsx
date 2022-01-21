import React from "react";
import Image from "next/image";

function File() {
  return (
    <div className="file">
      <img
        className="file-image"
        src="/static/img/thumbnail.jpg"
        alt="thumbnail"
      />
    </div>
  );
}

export default File;
