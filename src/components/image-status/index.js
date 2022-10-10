import React, { useMemo } from "react";
import styled from "styled-components";
import { getFirstLetters } from "utils";

const ImageContainer = styled.div`
  position: relative;
  height: 34px;
  width: 34px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.image_bg};
  .list_img {
    height: 100%;
    width: 100%;
    object-fit: contain;
    border-radius: 100%;
  }
  .name_container {
    height: 100%;
    width: 100%;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .name_text {
      text-align: center;
      color: #7269ef;
      font-size: 14px;
      font-weight: 500;
    }
  }
  .list_img_dot {
    position: absolute;
    bottom: 0;
    right: 0;
    border-radius: 100%;
    height: 10px;
    width: 10px;
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
    border: 2px solid ${({ theme }) => theme.card_bg};
  }
`;

function ImageStatus(props) {
  const { src, alt, name, status, className, showStatus = true, style } = props;

  const firstTwoLetters = useMemo(() => {
    if (!src && name) {
      const firstLetters = getFirstLetters(name);
      return firstLetters.length > 2 ? firstLetters.slice(0, 2) : firstLetters;
    }
  }, [name, src]);

  return (
    <ImageContainer status={status} style={style} className={className}>
      {src ? (
        <img className="list_img" alt={alt} src={src} />
      ) : (
        <div className="name_container">
          <p className="name_text">{firstTwoLetters}</p>
        </div>
      )}
      {showStatus && <span className="list_img_dot"></span>}
    </ImageContainer>
  );
}

export default ImageStatus;
