import React, { useState } from "react";
import "./Toolbar.css";
const ToolbarItems = (props) => {
  return (
    <>
      {props.menuItems.map((item) => (
        <span className="items">{item}</span>
      ))}
    </>
  );
};

const Toolbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="Toolbar">
        <ToolbarItems menuItems={["Works", "Blog", "Contact"]} />
      </div>
      <div className="Toolbar-small">
        <img
          className="Toolbar-small-image"
          src="/hamberger.svg"
          onClick={() => setShowMenu(true)}
        />
      </div>
      {showMenu && (
        <div className="Icon-onclick">
          <div className="Toolbar-small">
            <img
              src="/CloseCircleOutlined.svg"
              onClick={() => setShowMenu(false)}
              className={"Toolbar-small-image"}
            ></img>
          </div>
          <div className="Toolbar-small-content">
            <span>Works</span>
            <span>Blog</span>
            <span>Contact</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Toolbar;
