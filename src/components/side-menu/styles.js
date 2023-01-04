import styled, { css } from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.sidebarBg};
  box-shadow: 0 2px 4px rgb(15 34 58 / 12%);
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 75px;
  min-height: 570px;
  min-width: 75px;
  z-index: 9;
  .logo_container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
    width: 100%;
    padding: 10px;
  }
`;

export const Logo = styled.img`
  width: 100%;
  object-fit: container;
`;

export const ListContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const UnorderListContainer = styled.ul`
  list-style: none;
`;
export const Chunk = styled.li`
  margin: 7px 0;
  .chunk_icon_container {
    all: unset;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 56px;
    width: 56px;
    border-radius: 4px;
    ${(props) =>
      props.active &&
      css`
        background-color: ${({ theme }) => theme.chunkActiveBg};
      `}
    .chunk_icon {
      font-size: 20px;
      color: ${({ theme }) => theme.chunkColor};
    }
    &.active {
      background-color: ${({ theme }) => theme.chunkActiveBg};
      .chunk_icon {
        color: ${({ theme }) => theme.chunkActiveColor};
      }
    }
    &:hover {
      background-color: ${({ theme }) => theme.chunkActiveBg};
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  /* background-color: gold; */
`;

export const ThemeButton = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  width: 56px;
  margin: 7px 0;
  .chunk_icon {
    font-size: 20px;
    color: ${({ theme }) => theme.chunkColor};
  }
`;

export const LogoutMenuContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  width: 56px;
  border-radius: 4px;
  background-color: ${(props) => props.active && props.theme.chunkActiveBg};
  margin: 7px 0;
`;

export const LogoContainer = styled.div`
  all: unset;
  height: 36px;
  width: 36px;
  border-radius: 100%;
  overflow: hidden;
  cursor: pointer;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
`;

export const LogoutPopup = styled.div`
  position: absolute;
  bottom: 100%;
  left: 0px;
  box-shadow: 0 2px 4px rgb(15 34 58 / 12%);
  background-color: ${({ theme }) => theme.dropdownBg};
  padding: 10px 0;
  border-radius: 4px;
  overflow: hidden;
  width: 160px;
  .logout_button {
    all: unset;
    color: ${({ theme }) => theme.chunkColor};
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 8px 20px;
    box-sizing: border-box;
    cursor: pointer;
    .logout_text {
      font-size: 14px;
      font-weight: 600;
    }
    .icon {
      font-size: 16px;
    }
    &:hover {
      background-color: ${({ theme }) => theme.dropdownLinkHoverBg};
      .logout_text {
        color: ${({ theme }) => theme.dropdownHoverColor};
      }
    }
  }
`;

export const Divider = styled.hr`
  border: 0;
  border-top: 1px solid ${({ theme }) => theme.dropdownDividerColor};
  margin: 5px 0;
`;

export const SocketState = styled.span`
    background: red;
    width: 10px;
    height: 10px;
    position: absolute;
    border-radius: 50%;
    right: 0;
`;
