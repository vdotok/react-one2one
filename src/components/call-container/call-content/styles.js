import styled from "styled-components";
export const Container = styled.div`
  height: 100vh;
  width: 100%;
  /* background-color: pink; */
  padding: 40px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .inner_container {
    position: relative;
    flex: 1;
    /* background-color: brown; */
    .local_video_container {
      position: absolute;
      bottom: 10px;
      right: 10px;
      width: 234px;
      height: 132px;
      overflow: hidden;
      border-radius: 10px;
      background-color: ${({ theme }) => theme.gray_200_color};
      .local_video {
        display: ${(props) => (props.camera ? "block" : "none")};
        /* background-color: gold; */
      }
    }
    .remote_video_container {
      position: relative;
      width: 100%;
      height: 100%;
      /* display: ${(props) => (props.callMessage ? "none" : "block")}; */
      .remote_video {
        display: ${(props) => (props.videoStream ? "block" : "none")};
        /* background-color: gold; */
        max-width: 75%;
        margin: auto;
        max-height: 100%;
      }
    }
    .video {
      width: calc(100% + 2px);
      height: calc(100% + 2px);
      object-fit: contain;
      display: none;
      /* background-color: pink; */
      /* border-radius: 10px; */
    }
    .icon_container {
      position: absolute;
      top: 10px;
      right: 10px;
      height: 26px;
      width: 26px;
      border-radius: 100%;
      background-color: ${({ theme }) => theme.image_bg};
      text-align: center;
      .mic_off_icon {
        vertical-align: middle;
        font-size: 16px;
        color: #7269ef;
      }
    }
    .no_video_container {
      /* background-color: gold; */
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .img_container {
        height: 140px;
        width: 140px;
        &.local_img_container {
          height: 80px;
          width: 80px;
          .img {
            .name_container {
              .name_text {
                font-size: 40px;
              }
            }
          }
        }
        .img {
          height: 100%;
          width: 100%;
          padding: 5px;
          border-radius: 100%;
          .name_container {
            .name_text {
              font-size: 60px;
            }
          }
        }
      }
    }

    .calling_message_container {
      /* background-color: gold; */
      /* background-color: ${({ theme }) => theme.card_bg}; */
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .img_container {
        height: 140px;
        width: 140px;
        &.local_img_container {
          height: 80px;
          width: 80px;
          .img {
            .name_container {
              .name_text {
                font-size: 40px;
              }
            }
          }
        }
        .img {
          height: 100%;
          width: 100%;
          padding: 5px;
          border-radius: 100%;
          .name_container {
            .name_text {
              font-size: 60px;
            }
          }
        }
      }
      .selected_username_text {
        font-size: 20px;
        font-weight: 700;
        text-align: center;
        margin: 8px 0 5px 0;
        color: ${({ theme }) => theme.body_color};
      }
      .call_message_text {
        font-size: 14px;
        font-weight: 500;
        text-align: center;
        color: ${({ theme }) => theme.gray_700_color};
      }
    }
    .username_text {
      position: absolute;
      bottom: 10px;
      left: 10px;
      font-weight: 500;
      color: #7269ef;
      display: ${(props) => (props.callMessage ? "none" : "block")};
    }
  }
`;
