import React, { useState, useEffect, useMemo, useContext } from "react";
import axios from "axios";
import { UserContext } from "context/user";
import { useLocalStorage } from "hooks/useLocalStorage";
import { getUsers } from "services/user";
import UsersListContainer from "./users-list-container";
import EmptyUserContainer from "./empty-user-container";
import CreateChatModal from "components/create-chat-modal";
import { ChatPanelHeader } from "./styles";
import GetIcon from "utils/getIcon";
import { getGroups } from "services/group";
import { GroupContext } from "context/group";

function ChatSidePanel() {
  const [user] = useLocalStorage("user", {});
  const [showModal, setShowModal] = useState(false);
  const {
    state: { usersList, selectedUser, selectedChat, loading, error },
    dispatch: userDispatch,
    usersListRef,
  } = useContext(UserContext);

  const {
    state: { allGroups },
    dispatch: groupDispatch,
    groupListRef,
  } = useContext(GroupContext);

  console.log("## useData response", {
    loading,
    usersList,
    error,
    allGroups,
    selectedChat,
    selectedUser,
  });

  const getAllUsers = (body, cancelToken) => {
    getUsers(body, cancelToken)
      .then((res) => {
        if (res.status === 200) {
          userDispatch({ type: "GET_USERS_LIST", payload: res.data.users });
          usersListRef.current = res.data.users;
        } else {
          userDispatch({
            type: "GET_USER_ERROR",
            payload: res.data.message,
          });
        }
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          userDispatch({
            type: "GET_USER_ERROR",
            payload: "**getUsers Res axios cancel",
          });
        } else {
          userDispatch({
            type: "GET_USER_ERROR",
            payload: err,
          });
        }
      });
  };

  const getAllGroups = (body, cancelToken) => {
    getGroups(body, cancelToken)
      .then((res) => {
        console.log("getGroups", { res });
        if (res.status === 200) {
          if (res.data.status === 200) {
            groupDispatch({
              type: "GET_GROUPS",
              payload: res.data.groups,
            });
            groupListRef.current = res.data.groups;
          } else {
            groupDispatch({
              type: "GET_GROUP_ERROR",
              payload: res.data.message,
            });
          }
        } else {
          groupDispatch({
            type: "GET_GROUP_ERROR",
            payload: res.data.message,
          });
        }
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          groupDispatch({
            type: "GET_GROUP_ERROR",
            payload: "getGroups Res axios cancel",
          });
        } else {
          groupDispatch({
            type: "GET_GROUP_ERROR",
            payload: err,
          });
        }
      });
  };

  const fetchUsersAndGroups = async (cancelToken) => {
    const body = {
      auth_token: user.auth_token,
    };
    await Promise.all([
      getAllUsers(body, cancelToken),
      getAllGroups(body, cancelToken),
    ]);
  };

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();

    if (user.auth_token) {
      fetchUsersAndGroups(cancelToken);
    }

    return () => {
      cancelToken.cancel();
    };
  }, [user.auth_token]);

  const renderUI = useMemo(() => {
    console.log("renderUI", { allGroups });
    if (loading) {
      return <h1>Loading</h1>;
    } else if (allGroups?.length) {
      return <UsersListContainer groups={allGroups} />;
    }
    return (
      <EmptyUserContainer
        title="There are no users to display"
        desc="Easily create users via the signup page"
      />
    );
  }, [loading, allGroups]);

  return (
    <>
      <ChatPanelHeader>
        <h4 className="chat_text">Chats</h4>
        <div className="create_container" onClick={() => setShowModal(true)}>
          <h4 className="create_text">Create</h4>
          <GetIcon iconName="add" className="add_icon" />
        </div>
      </ChatPanelHeader>
      {renderUI}
      {showModal && <CreateChatModal setShowModal={setShowModal} />}
    </>
  );
}

export default ChatSidePanel;
