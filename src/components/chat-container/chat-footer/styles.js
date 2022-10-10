import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-top: 1px solid ${({ theme }) => theme.border_color};
  /* background-color: aqua; */
`;

export const MoreOptionContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
  .option_icon {
    font-size: 20px;
    color: ${({ theme }) => theme.gray_600_color};
    cursor: pointer;
    &:nth-child(2) {
      margin: 0 30px;
    }
  }
`;

export const Button = styled.button`
  border: none;
  outline: none;
  background-color: #7269ef;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 10px 14px 8px 14px;
  border-radius: 6px;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
  .button_icon {
    color: #fff;
    font-size: 18px;
  }
`;
