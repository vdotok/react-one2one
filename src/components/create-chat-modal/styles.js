import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9;
`;

export const ModalContainer = styled.div`
  /* display: flex;
  align-items: center;
  flex-direction: column; */
  min-width: 500px;
  max-width: 500px;
  /* max-height: 80vh; */
  background-color: ${({ theme }) => theme.modal_content_bg};
  border: 1px solid ${({ theme }) => theme.modal_content_border_color};
  border-radius: 4px;
  padding: 20px;
  box-sizing: border-box;
`;

export const TabContainer = styled.div`
  /* background-color: gold; */
  .tab_header {
    display: flex;
    .tab_chunk {
      padding: 10px;
      background-color: gold;
      cursor: pointer;
      &:nth-child(even) {
        margin-left: 5px;
      }
    }
  }
  .tab_body {
    /* background-color: pink; */
    min-height: 50vh;
    max-height: 80vh;
    overflow-y: auto;
    margin-top: 10px;
  }
`;
