import React, { useState, useContext } from "react";
import styled from "styled-components";
import ModalUserCard from "components/create-chat-modal/modal-user-card";
import { useLocalStorage } from "hooks/useLocalStorage";
import { createGroup } from "services/group";
import { GroupContext } from "context/group";

export const Container = styled.div`
  padding: 0 10px;
  margin-top: 20px;
  .header_container {
    /* background-color: gold; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    .title_text {
      color: ${({ theme }) => theme.gray_700_color};
      font-weight: 600;
      padding: 0 10px;
    }
    .header_button {
      outline: none;
      border: none;
      background-color: #7269ef;
      color: #fff;
      padding: 8px 16px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: bolder;
      cursor: pointer;
      &:disabled {
        opacity: 0.5;
        cursor: unset;
      }
    }
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

function ModalAllUserList(props) {
  const { users = [] } = props;
  const { dispatch: groupDispatch } = useContext(GroupContext);
  const [user] = useLocalStorage("user", {});
  const [selectedUsers, setSelectedUsers] = useState([]);

  const selectSingleUser = (user) => {
    const hasUser = selectedUsers.some((res) => res.ref_id === user.ref_id);
    if (hasUser) {
      return setSelectedUsers([]);
    }
    return setSelectedUsers([user]);
  };

  console.log({ user });

  const createChatHandler = () => {
    const participants = selectedUsers.map((user) => user.user_id);
    const body = {
      auth_token: user.auth_token,
      group_title: `${user.full_name}/${selectedUsers[0].full_name}`,
      participants,
      auto_created: 1,
    };
    createGroup(body)
      .then((res) => {
        console.log("## createGroup Res", { res });
        if (res.data.status === 200) {
          if (!res.data.is_already_created) {
            groupDispatch({ type: "ADD_NEW_GROUP", payload: res.data.group });
          }
        } else {
          console.log("## createGroup Err else", { err: res.data.message });
        }
      })
      .catch((err) => {
        console.log("## createGroup Err", { err });
      });
  };

  return (
    <Container>
      <div className="header_container">
        <p className="title_text">Users</p>
        <button
          className="header_button"
          disabled={!selectedUsers.length}
          onClick={createChatHandler}
        >
          Create Chat
        </button>
      </div>
      <div className="user_list_container">
        {users.length
          ? users.map((user) => (
              <ModalUserCard
                key={user.user_id}
                user={user}
                selectedUsers={selectedUsers}
                onClick={() => selectSingleUser(user)}
              />
            ))
          : null}
      </div>
    </Container>
  );
}

export default ModalAllUserList;
