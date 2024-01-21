import React from "react";
import ColorSchemeSwitcher from "./ColorSchemeSwitcher";

const Header = (props) => {
  return (
    <header className="container" {...props}>
      <ColorSchemeSwitcher className="contrast" />
    </header>
  );
};

export default Header;
