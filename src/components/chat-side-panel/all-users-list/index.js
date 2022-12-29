import React, { useContext, useEffect } from "react";
import UserCard from "components/user-card";
import { UserContext } from "context/user";
import { useLocalStorage } from "hooks/useLocalStorage";
import { Container } from "./styles";

function AllUserList(props) {
  const { users = [] } = props;
  const { state, dispatch } = useContext(UserContext);
  const [currentUser] = useLocalStorage("currentUser", {});

  useEffect(() => {
    console.log("select_user currentUser", { currentUser });
    if (currentUser.ref_id) {
      dispatch({ type: "SELECT_USER", payload: currentUser });
    }
  }, [currentUser.ref_id]);

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
