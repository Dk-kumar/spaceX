import React from "react";
import { Link } from "react-router-dom";

import { Logo } from "../../Utils/Logo";
import "./Header.style.scss";

const Header = (props) => {
  console.log(props);
  const renderLogo = () => {
    return (
      <>
        <Link className="Logo-Container" to={"/"}>
          <div className="Logo">{Logo()}</div>
          <div className="Home-Text">Home</div>
        </Link>
        {renderLinks()}
      </>
    );
  };

  const renderLinks = () => {
    const { NavLink, page } = props;

    return (
      <nav className="Nav">
        {NavLink.map((res) => {
          return (
            <Link
              className={`link ${page === res.link && "Active"}`}
              to={`/${res.link}`}
            >
              {res.link}
            </Link>
          );
        })}
      </nav>
    );
  };
  return <div className="Header-Container">{renderLogo()}</div>;
};

export default Header;
