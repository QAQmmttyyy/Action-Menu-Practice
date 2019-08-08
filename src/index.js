import React from "react";
import ReactDOM from "react-dom";
import { faEdit, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Menu from "./Menu";

import "./styles.scss";

const Item = Menu.MenuItem;

function App() {
  return (
    <Menu className="action-menu">
      <Item icon={<FontAwesomeIcon icon={faEdit} />} content="Edit" />
      <Item icon={<FontAwesomeIcon icon={faStar} />} content="Make Primary" />
    </Menu>
  );
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
