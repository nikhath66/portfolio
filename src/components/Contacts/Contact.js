import React from "react";
import "./Contact.css";

const Icons = (props) => {
  return (
    <div className="Contact-items">
      <img src={props.image}></img>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="Contact-page">
      <div className="Contact-icons">
        <Icons image={"./images/fb.png"} />
        <Icons image={"./images/insta.svg"} />
        <Icons image={"./images/Vector.png"} />
        <Icons image={"./images/Linkedin.png"} />
      </div>
      <div className="Copyright">Copyright ©2020 All rights reserved </div>
    </div>
  );
};

export default Contact;
