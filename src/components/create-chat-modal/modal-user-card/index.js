import React, { useMemo } from "react";
import styled from "styled-components";
import ImageStatus from "components/image-status";
import GetIcon from "utils/getIcon";
const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  border-radius: 4px;
  margin-bottom: 5px;
  background-color: ${({ theme }) => theme.gray_200_color};
  cursor: pointer;
  &:last-child {
    margin-bottom: 0;
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
  .add_icon {
    color: #7269ef;
    font-size: 20px;
  }
`;
function ModalUserCard(props) {
  const {
    user: { ref_id, full_name, profile_pic },
    onClick = () => {},
    selectedUsers = [],
  } = props;

  const selected = useMemo(() => {
    return selectedUsers.some((user) => user.ref_id === ref_id);
  }, [selectedUsers]);

  return (
    <Container onClick={onClick}>
      <ImageStatus
        style={{ flexShrink: 0 }}
        src={profile_pic}
        name={full_name}
        alt="profile pic"
        showStatus={false}
      />
      <div className="content_container">
        <div className="top_content">
          <p className="username_text">{full_name}</p>
        </div>
      </div>
      {selected && <GetIcon iconName="check" className="add_icon" />}
    </Container>
  );
}

export default ModalUserCard;
