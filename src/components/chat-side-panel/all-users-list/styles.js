import styled from "styled-components";

export const Container = styled.div`
  padding: 0 10px;
  margin-top: 20px;
  .title_text {
    color: ${({ theme }) => theme.gray_700_color};
    font-weight: 600;
    padding: 0 10px;
    margin-bottom: 20px;
  }
  .user_list_container {
    height: calc(100vh - 270px);
    overflow-y: auto;
    scrollbar-color: ${({ theme }) => theme.scrollbar_color} transparent;
    scrollbar-width: thin;

    /* width */
    ::-webkit-scrollbar {
      width: 8px;
    }

    /* Track */
    /* ::-webkit-scrollbar-track {
      background: red;
    } */

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.scrollbar_color};
      border-radius: 4px;
    }

    /* Handle on hover */
    /* ::-webkit-scrollbar-thumb:hover {
      background: #555;
    } */
  }
`;
