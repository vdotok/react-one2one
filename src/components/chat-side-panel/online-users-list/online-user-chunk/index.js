import React, { useMemo } from "react";
import styled from "styled-components";
import ImageStatus from "components/image-status";
import { getFirstWord } from "utils";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-right: 8px;
  .list_img_container {
    position: absolute;
    top: 0;
  }
  .list_name_container {
    padding: 18px 14px 10px 14px;
    background-color: ${({ theme }) => theme.gray_200_color};
    margin-top: 17px;
    border-radius: 6px;
    .list_name {
      font-size: 13px;
      font-weight: 600;
      color: ${({ theme }) => theme.gray_700_color};
    }
  }
`;

function OnlineUserChunk(props) {
  const { id, imageUrl, name } = props;

  const fisrtWord = useMemo(() => {
    if (name) {
      return getFirstWord(name);
    }
  }, [name]);

  return (
    <Container>
      <div className="list_img_container">
        <ImageStatus
          src={imageUrl}
          name={name}
          alt="profile pic"
          status="online"
        />
      </div>
      <div className="list_name_container">
        <p className="list_name">{fisrtWord}</p>
      </div>
    </Container>
  );
}

export default OnlineUserChunk;
