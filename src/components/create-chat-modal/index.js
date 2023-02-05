import React, { useContext, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { UserContext } from "context/user";
import { Container, ModalContainer, TabContainer } from "./styles";
import { uniqueString } from "utils";
import EmptyUserContainer from "components/chat-side-panel/empty-user-container";
import SearchInput from "components/search-input";
import ModalUserListContainer from "./modal-user-list-container";
const tabs = [
  { id: uniqueString(), index: 0, title: "Single Chat" },
  { id: uniqueString(), index: 1, title: "Group Chat" },
];
const createChatModal = document.getElementById("create_chat_modal");
function CreateChatModal(props) {
  const { setShowModal } = props;
  const [selectedTab, setSelectedTab] = useState(0);

  const {
    state: { usersList },
  } = useContext(UserContext);

  const renderUI = useMemo(() => {
    if (usersList?.length) {
      return <ModalUserListContainer users={usersList} />;
    }
    return (
      <EmptyUserContainer
        title="There are no users to display"
        desc="Easily create users via the signup page"
      />
    );
  }, [usersList]);

  const tabRender = useMemo(() => {
    switch (selectedTab) {
      case 0:
        return renderUI;
      case 1:
        return <h1>don</h1>;
      default:
        return;
    }
  }, [selectedTab]);

  return createPortal(
    <Container
      onClick={(event) => {
        event.stopPropagation();
        setShowModal(false);
      }}
    >
      <ModalContainer onClick={(event) => event.stopPropagation()}>
        <TabContainer>
          {usersList?.length ? (
            <div className="tab_header">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`tab_chunk ${
                    selectedTab === tab.index ? "tab_chunk_active" : ""
                  }`}
                  onClick={() => setSelectedTab(tab.index)}
                >
                  <p className="tab_chunk_text">{tab.title}</p>
                </div>
              ))}
            </div>
          ) : null}
          <div className="tab_body">{tabRender}</div>
        </TabContainer>
      </ModalContainer>
    </Container>,
    createChatModal
  );
}

export default CreateChatModal;
