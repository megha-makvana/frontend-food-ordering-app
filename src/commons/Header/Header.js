import React from "react";
import { FastfoodOutlined as FastfoodIcon } from "@material-ui/icons";
import "./Header.css";

const Header = () => {
  return (
    <div className="mainDiv">
      <div>
        <FastfoodIcon style={{ color: "white" }} />
      </div>
      <div>Searchbar</div>
      <div>Login</div>
    </div>
  );
};

export default Header;
