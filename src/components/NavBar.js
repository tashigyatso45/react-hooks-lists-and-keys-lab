import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linksElement = links.map((links) => {
    return <a key={links} href={`#${links}`}>{links}</a>
  
  })

  return <nav>{linksElement}</nav>;
}

export default NavBar;
