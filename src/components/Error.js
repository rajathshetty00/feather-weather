import React from "react";
const Error = props => {
  var error = null;
  if (props.error) {
    error = (
      <div className="weather__error">
        <p />
        {props.error}
      </div>
    );
  }

  return error;
};

export default Error;
