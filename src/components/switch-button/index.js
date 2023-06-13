import React, { useState } from "react";
import {Container} from './style'
function SwitchButton(props) {
  const { checked, onChange, className, onClick } = props;
  return (
    <Container className={className}>
      <label className="switch_button">
        <input
          className="switch_input"
          type="checkbox"
          onChange={onChange}
          checked={checked}
          onClick={onClick}
        />
        <span className="switch_slider switch_slider_round"></span>
      </label>
    </Container>
  );
}

export default SwitchButton;
