import React from "react";

const ToggleBox = ({ chooseMessage }) => {
  let msg = "Goodbye";
  return (
    <div>
      <button onClick={() => chooseMessage(msg)}>Change Message</button>
    </div>
  );
};

export default ToggleBox;
