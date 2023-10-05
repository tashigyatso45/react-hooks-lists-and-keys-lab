import React from "react";

function Links(props) {
  console.log(props)
  return (
    <div>
      <h3>Links</h3>
      <a href="#home">{props.github}</a>
      <a href="">{props.linkedin}</a>
    </div>
  );
}

export default Links;
