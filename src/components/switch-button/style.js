import styled from "styled-components";
//line 29 before background-color is #54c295
export const Container = styled.div`
  //   background-color: gold;
  cursor: pointer;

  .switch_button {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 24px;
    margin: 0;
    // pointer-events: none;
    .switch_input {
      opacity: 0;
      width: 0;
      height: 0;
      // &:checked + .switch_slider {
      //   background-color: #2196f3;
      // }
      // &:focus + .switch_slider {
      //   box-shadow: 0 0 1px #2196f3;
      //   box-shadow: 0 0 5px #f32164;
      // }
      &:checked + .switch_slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
        background-color: #7269ef;
      }
    }
    .switch_slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #f5f6fa;
      -webkit-transition: 0.25s;
      transition: 0.25s;
      &:before {
        position: absolute;
        content: "";
        height: 20px;
        width: 20px;
        left: 0px;
        bottom: 0px;
        background-color: #e2e2ea;
        border: 2px solid #ffffff;
        -webkit-transition: 0.25s;
        transition: 0.25s;
      }
      /* Rounded sliders */
      &.switch_slider_round {
        border-radius: 34px;
        &:before {
          border-radius: 50%;
        }
      }
    }
  }
`;
