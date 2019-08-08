import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./MenuItem.scss";

export default class MenuItem extends React.PureComponent {
  render() {
    const { className, icon, content } = this.props;

    return (
      <div className={classNames("mty-menu-item", className)}>
        <div className="left-icon">{icon}</div>
        <div className="right-content">{content}</div>
      </div>
    );
  }
}

MenuItem.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.node,
  content: PropTypes.node
};
