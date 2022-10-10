import UserCard from "components/user-card";
import React from "react";
import { Container } from "./styles";

function AllUserList(props) {
  const { users = [] } = props;
  return (
    <Container>
      <p className="title_text">Contact</p>
      <div className="user_list_container">
        {users.length
          ? users.map((user) => <UserCard key={user.user_id} user={user} />)
          : null}
      </div>
    </Container>
  );
}

export default AllUserList;
