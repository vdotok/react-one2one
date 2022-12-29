import React, { useMemo, useDeferredValue, useState } from "react";
import SearchInput from "components/search-input";
import { lowerCase } from "utils";
import ModalAllUserList from "./modal-all-user-list";

function ModalUserListContainer(props) {
  const { users } = props;
  const [value, setValue] = useState("");

  const searchUsers = (event) => {
    const { value } = event.target;
    setValue(value);
  };

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
      <SearchInput
        iconName="search"
        inputProps={{
          type: "text",
          placeholder: "Search user",
          value,
          onChange: searchUsers,
        }}
      />
      <ModalAllUserList users={filterUserList} />
    </>
  );
}

export default ModalUserListContainer;
