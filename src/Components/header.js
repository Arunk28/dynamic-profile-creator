import React from "react";
import "./header.css";
const Header = ({ avatar, intro }) => {
  console.log(intro);
  const introData = intro.map((h) => {
    return <div className="hmargin hfont">{h}</div>;
  });

  return (
    <div>
      <div className="header">
        <img
          src={avatar}
          alt="profile"
          className="rounded-circle img-thumbnail"
        />
      </div>
      {introData}
    </div>
  );
};

export default Header;
