import React from "react";

import styling from "./Header.module.scss";
import Avatar from "../Avatar/Avatar";
import Input from "../Input/Input";
import Button from "../Button/Button";

const Nav = (props) => {
  return (
    <nav className={styling.nav}>
      <div className={styling.title}>{props.title}</div>

      <div className={styling.user}>
        <Avatar firstName="Brijesh" lastName="Bumrela" />

        <div>
          <div className={styling.name}>Brijesh Bumrela</div>
          <div className={styling.email}>brijesh@gmail.com</div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
