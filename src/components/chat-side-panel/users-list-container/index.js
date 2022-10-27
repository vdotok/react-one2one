import React, { useMemo, useDeferredValue } from "react";
import { lowerCase } from "utils";
import AllUserList from "../all-users-list";
// import OnlineUsersList from "../online-users-list";

function UsersListContainer(props) {
  const { value, users } = props;

  const deferredValue = useDeferredValue(value);

  const filterUserList = useMemo(() => {
    if (deferredValue) {
      return [...users].filter((user) =>
        lowerCase(user.full_name).includes(lowerCase(deferredValue))
      );
    }
    return users;
  }, [deferredValue, users]);

  console.log("% filterUserList", {
    filterUserList,
    deferredValue,
    value,
    users,
  });

  return (
    <>
      {/* <OnlineUsersList users={filterUserList} /> */}
      <AllUserList users={filterUserList} />
    </>
  );
}

export default UsersListContainer;
