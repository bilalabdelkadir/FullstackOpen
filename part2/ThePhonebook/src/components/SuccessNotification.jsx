import React from "react";
const SuccessNotification = ({ message, onCloseMessage }) => {
  if (!message) {
    return null;
  }
  return (
    <div className="success">
      {message}{" "}
      <button onClick={onCloseMessage} className="closeButton">
        X
      </button>
    </div>
  );
};

export default SuccessNotification;
