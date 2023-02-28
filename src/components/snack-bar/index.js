import { SnackbarContext } from "context/snackbar";
import React, { useContext } from "react";
import { createPortal } from "react-dom";
import styled, { css } from "styled-components";

const SuccessMessage = css`
  background-color: rgb(56, 142, 60);
  color: #000;
`;
const ErrorMessage = css`
  background-color: rgb(211, 47, 47);
  color: #fff;
`;
const WarningMessage = css`
  background-color: rgb(245, 124, 0);
  color: #000;
`;
const InfoMessage = css`
  background-color: rgb(2, 136, 209);
  color: #000;
`;
const DefaultMessage = css`
  background-color: #323232;
  color: #fff;
`;

const SnackBarContainer = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  border-radius: 4px;
  min-width: 344px;
  max-width: 672px;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  padding: 16px;
  animation: 300ms ease-out forwards slide-up;
  overflow: hidden;
  ${(props) => {
    switch (props.type) {
      case "success":
        return SuccessMessage;
      case "error":
        return ErrorMessage;
      case "warning":
        return WarningMessage;
      case "info":
        return InfoMessage;
      default:
        return DefaultMessage;
    }
  }}
  /* .snackbar__label {
    line-height: 1.2rem;
    padding-left: 16px;
    padding-right: 8px;
    width: 100%;
    margin: 0;
    padding-top: 14px;
    padding-bottom: 14px;
  } */

  .snackbar__dismiss {
    color: ${(props) => {
      switch (props.type) {
        case "error":
          return "#fff";
        case "success":
        case "info":
        case "warning":
          return "#000";
        default:
          return "#fff";
      }
    }};
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
  }

  @keyframes slide-up {
    from {
      opacity: 0;
      transform: translateY(3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

function SnackBar(props) {
  const { msg, onClose, type } = useContext(SnackbarContext);
  return createPortal(
    <SnackBarContainer type={type}>
      <p className="snackbar__label">{msg || "Hello!"}</p>
      <div className="snackbar__dismiss" onClick={onClose}>
        &times;
      </div>
    </SnackBarContainer>,
    document.getElementById("snack_bar")
  );
}

export default SnackBar;
