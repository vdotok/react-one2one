import React from "react";
import styled from "styled-components";
import OnlineUserChunk from "./online-user-chunk";

const UserListContainer = styled.div`
  margin-top: 20px;
  overflow: hidden;
  height: 63px;
  .user_list_inner_container {
    padding: 0px 20px 20px 20px;
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    overscroll-behavior-x: contain;
  }
`;

function OnlineUsersList(props) {
  const { users = [] } = props;

  return (
    <UserListContainer>
      <div className="user_list_inner_container">
        {users.length
          ? users.map((user) => {
              return <OnlineUserChunk key={user.id} {...user} />;
            })
          : null}
      </div>
    </UserListContainer>
  );
}

export default OnlineUsersList;
