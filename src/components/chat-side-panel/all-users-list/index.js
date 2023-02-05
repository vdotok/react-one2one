import UserCard from "components/user-card";
import React from "react";
import { Container } from "./styles";

function AllUserList(props) {
  const { groups = [] } = props;
  return (
    <Container>
      <p className="title_text">Contact</p>
      <div className="user_list_container">
        {groups.length
          ? groups.map((group) => <UserCard key={group.id} group={group} />)
          : null}
      </div>
    </Container>
  );
}

export default AllUserList;
