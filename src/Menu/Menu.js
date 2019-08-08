import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Menu.scss";

export default class Menu extends React.PureComponent {
  render() {
    const { children, className } = this.props;

    return <div className={classNames("mty-menu", className)}>{children}</div>;
  }
}

Menu.propTypes = {
  className: PropTypes.string
};

// Menu.defaultProps = {
//   className: "mty-menu"
// };
