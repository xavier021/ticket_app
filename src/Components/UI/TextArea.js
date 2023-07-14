import React from "react";

export default function TextAreaUI(props) {
  return (
    <textarea
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      className={props.className}
      onChange={(e) => {
        props.handleChange(e);
      }}
    />
  );
}
