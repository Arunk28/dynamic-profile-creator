import React from "react";
//import styles from "./card.module.css"; // css module import and how to use
import "./card.css"; // normal css import and use

const Card = ({ props }) => {
  let content = null;
  if (
    props.title === "About" ||
    props.title === "Education" ||
    props.title === "Experience"
  ) {
    content = props.content.map((h) => {
      return (
        <div
          className={`hmargin font-black ${
            props.title === "Education" ? "justify-left" : ""
          }`}
        >
          {h}
        </div>
      );
    });
  } else if (props.title === "Skills" || props.title === "Language") {
    let content1 = props.content.map((h) => {
      return (
        <li>
          <span
            className={`${
              props.title === "Skills" ? "badge rounded-pill  bg-secondary" : ""
            }`}
          >
            {h}
          </span>
        </li>
      );
    });
    content = (
      <div>
        <ul>{content1}</ul>
      </div>
    );
  } else if (props.title === "Contact") {
    content = props.content.map((h) => {
      console.log(h);
      h.text = h.text.includes("http") ? (
        <a href={`${h.text}`}>{h.text}</a>
      ) : (
        h.text
      );
      return (
        <p>
          <i className={`${h.icon}`}></i>
          <span> {h.text} </span>
        </p>
      );
    });
  }
  let _height =
    props.title === "Education" || props.title === "Experience"
      ? "edu-card"
      : "card-height";
  _height = props.title === "Language" ? "lang-card" : _height;
  _height = props.title === "Contact" ? "contact-card" : _height;

  return (
    <div className={`card pad border-radius-none ${_height}`}>
      <div className="card-body">
        <h5 className="card-title fonth1">{props.title}</h5>
        <p className="card-text">{content}</p>
        {/* <a href="#" className="btn btn-primary">
          Go somewhere
        </a> */}
      </div>
    </div>
  );
};
Card.defaultProps = {
  title: "",
};
export default Card;
