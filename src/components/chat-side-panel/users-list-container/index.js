import SearchInput from "components/search-input";
import React, { useMemo, useDeferredValue, useState } from "react";
import styled from "styled-components";
import { lowerCase } from "utils";
import AllUserList from "../all-users-list";
// import OnlineUsersList from "../online-users-list";

const SearchContainer = styled.div`
  padding: 0 20px;
`;

function UsersListContainer(props) {
  const { groups } = props;

  const [value, setValue] = useState("");

  const deferredValue = useDeferredValue(value);

  const filterUserList = useMemo(() => {
    if (deferredValue) {
      return [...groups].filter((user) =>
        lowerCase(user["participants"][0].full_name).includes(lowerCase(deferredValue))
      );
    }
    return groups;
  }, [deferredValue, groups]);

  const searchUsers = (event) => {
    const { value } = event.target;
    setValue(value);
  };

  console.log("% filterUserList", {
    filterUserList,
    deferredValue,
    value,
    groups,
  });

  return (
    <>
      {/* <OnlineUsersList groups={filterUserList} /> */}
      <SearchContainer>
        <SearchInput
          iconName="search"
          inputProps={{
            type: "text",
            placeholder: "Search user",
            value,
            onChange: searchUsers,
          }}
        />
      </SearchContainer>
      <AllUserList groups={filterUserList} />
    </>
  );
}

export default UsersListContainer;
