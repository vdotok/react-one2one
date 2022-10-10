import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.border_color};
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  .username {
    color: ${({ theme }) => theme.gray_700_color};
    font-size: 16px;
    font-weight: 600;
    margin-left: 14px;
    white-space: nowrap;
  }
`;

export const Status = styled.div`
  position: relative;
  height: 10px;
  width: 10px;
  border-radius: 100%;
  margin-left: 6px;
  margin-top: 5px;
  flex-shrink: 0;
  background-color: ${(props) => {
    switch (props.status) {
      case "online":
        return "#06d6a0";
      case "away":
        return "#ffd166";
      default:
        return "#adb5bd";
    }
  }};
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 100%;
    transform: translate(-50%, -50%);
    height: 2px;
    width: 2px;
    background-color: ${({ theme }) => theme.card_bg};
  }
`;

export const MoreOptionContainer = styled.div`
  display: flex;
  align-items: center;
  .option_icon {
    font-size: 20px;
    color: ${({ theme }) => theme.gray_600_color};
    cursor: pointer;
    &:nth-child(2) {
      margin: 0 30px;
    }
  }
`;
