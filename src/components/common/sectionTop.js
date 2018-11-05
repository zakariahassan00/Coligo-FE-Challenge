import React from "react";
import { Link } from "react-router-dom";

const SectionTop = ({ title, mssg, link }) => {
  return (
    <React.Fragment>
      <h3>{title}</h3>
      <p>{mssg}</p>
      <Link to={`/${link}`}>All</Link>
    </React.Fragment>
  );
};

export default SectionTop;
