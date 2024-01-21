import React from "react";

const Footer = (props) => {
  return (
    <footer className="container" {...props}>
      <small>
        Built with <a href="https://picocss.com">Pico</a> •{" "}
        <a href="https://github.com/picocss/examples/tree/master/v2-react-color-schemes-and-modal">
          Source code
        </a>
      </small>
    </footer>
  );
};

export default Footer;
