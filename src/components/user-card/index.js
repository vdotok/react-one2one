import React, { useContext } from "react";
import styled, { css } from "styled-components";
import ImageStatus from "components/image-status";
import { UserContext } from "context/user";

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  border-radius: 4px;
  margin-bottom: 1px;
  cursor: pointer;
  ${(props) =>
    props.active &&
    css`
      background-color: ${({ theme }) => theme.gray_200_color};
    `}
  &:hover {
    background-color: ${({ theme }) => theme.gray_200_color};
  }
  .content_container {
    margin-left: 16px;
    flex: 1;
    .top_content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .username_text {
        font-size: 15px;
        font-weight: 600;
        color: ${({ theme }) => theme.gray_700_color};
        width: 236px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .user_msg_time_text {
        font-size: 11px;
        color: ${({ theme }) => theme.gray_600_color};
      }
    }
    .bottom_content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 2px;
      .msg_text {
        font-size: 14px;
        color: ${({ theme }) => theme.gray_600_color};
        width: 236px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .msg_count_container {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        height: 20px;
        width: 20px;
        flex-shrink: 0;
        background-color: rgba(239, 71, 111, 0.18);

        .msg_count_text {
          font-size: 11px;
          color: #ef476f;
          text-align: center;
        }
      }
    }
  }
`;

function UserCard(props) {
  const {
    user: {
      ref_id,
      full_name,
      message = "",
      count = "",
      created_datetime,
      profile_pic,
      status = "",
    },
  } = props;

  const { state, dispatch } = useContext(UserContext);
  //console.log({ state });
  return (
    <Container
      active={state.selectedUser.ref_id === ref_id}
      onClick={() => dispatch({ type: "SELECT_USER", payload: props.user })}
    >
      <ImageStatus
        style={{ flexShrink: 0 }}
        src={profile_pic}
        name={full_name}
        alt="profile pic"
        status={status}
        showStatus={false}
      />
      <div className="content_container">
        <div className="top_content">
          <p className="username_text">{full_name}</p>
          {/* <p className="user_msg_time_text">{created_datetime}</p> */}
        </div>
        {message && (
          <div className="bottom_content">
            <p className="msg_text">{message}</p>
            {count && (
              <div className="msg_count_container">
                <p className="msg_count_text">{count}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </Container>
  );
}

export default UserCard;
