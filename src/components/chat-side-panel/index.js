import React, { useState, useEffect, useMemo, useContext } from "react";
import axios from "axios";
import { UserContext } from "context/user";
import { useLocalStorage } from "hooks/useLocalStorage";
import { getUsers } from "services/user";
import SearchInput from "components/search-input";
import UsersListContainer from "./users-list-container";
import EmptyUserContainer from "./empty-user-container";
import { ChatSearchContainer } from "./styles";
import ToggleBox from "components/toggle";

function ChatSidePanel() {
  // RA = const [message, setMessage] = useState("Hello World");
  const [value, setValue] = useState("");

  const [user] = useLocalStorage("user", {});

  const {
    state: { usersList, loading, error },
    dispatch: userDispatch,
    usersListRef,
  } = useContext(UserContext);

  console.log("## useData response", { loading, usersList, error });

/////////////////////////////////////////
  // RA const chooseMessage = (message) => {
  //   setMessage(message);
  // };
/////////////////////////////////////////  
  useEffect(() => {
    const cancelToken = axios.CancelToken.source();

    if (user.auth_token) {
      const body = {
        auth_token: user.auth_token,
      };
      getUsers(body, cancelToken)
        .then((res) => {
          if (res.status === 200) {
            userDispatch({ type: "GET_USERS_LIST", payload: res.data.users });
            usersListRef.current = res.data.users;
          } else {
            userDispatch({ type: "GET_USER_ERROR", payload: res.data.message });
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
    }

    return () => {
      cancelToken.cancel();
    };
  }, [user.auth_token]);

  const searchUsers = (event) => {
    const { value } = event.target;
    setValue(value);
  };

  console.log("% value", { value });

  const renderUI = useMemo(() => {
    console.log("renderUI", { usersList });
    if (loading) {
      return <h1>Loading</h1>;
    } else if (usersList?.length) {
      return <UsersListContainer value={value} users={usersList} />;
    }
    return <EmptyUserContainer />;
  }, [loading, usersList, value]);

  return (
    <>
      <ChatSearchContainer>
        <h4 className="chat_text">
          Chats <span style={{ float: "right" }}>{user.full_name}</span>
        </h4>
        {/* <h4>my heading</h4> */}

        {/* <h1>{message}</h1>
        <ToggleBox chooseMessage={chooseMessage}/> */}






        
        {usersList?.length ? (
          <SearchInput
            iconName="search"
            inputProps={{
              type: "text",
              placeholder: "Search user",
              value,
              onChange: searchUsers,
            }}
          />
        ) : null}
      </ChatSearchContainer>
      {renderUI}
    </>
  );
}

export default ChatSidePanel;
