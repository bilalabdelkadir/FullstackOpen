import React from "react";

const ErrorNotification = ({ message, onCloseMessage }) => {
  if (!message) {
    return null;
  }
  return (
    <div className="error">
      {message}{" "}
      <button onClick={onCloseMessage} className="closeButton">
        X
      </button>
    </div>
  );
};

export default ErrorNotification;
