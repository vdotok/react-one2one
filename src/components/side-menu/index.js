import React, { useState, useEffect, useMemo, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import GetIcon from "utils/getIcon";
import { useLocalStorage } from "hooks/useLocalStorage";
import { DarkModeContext } from "context/dark-mode";
import {
  Container,
  Logo,
  ListContainer,
  UnorderListContainer,
  Chunk,
  Footer,
  ThemeButton,
  LogoutMenuContainer,
  Image,
  LogoContainer,
  LogoutPopup,
  // Divider,
} from "./styles";
import logo from "assets/images/logo.png";
import avatar from "assets/images/avatar.jpg";
import { uniqueString } from "utils";
import { VdotokClientContext } from "context/vdotok-client";
import { CallContext } from "context/call";

const chunks = [
  // {
  //   id: uniqueString(),
  //   Icon: <GetIcon iconName="user" className="chunk_icon" />,
  // },
  {
    id: uniqueString(),
    Icon: <GetIcon iconName="chat" className="chunk_icon" />,
  },
  // {
  //   id: uniqueString(),
  //   Icon: <GetIcon iconName="groupUser" className="chunk_icon" />,
  // },
];

function SideMenu() {
  const navigate = useNavigate();
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const { vdotokClient, setVdotokClient } = useContext(VdotokClientContext);
  const { state: uuid } = useContext(CallContext);
  console.log({ vdotokClient });
  const [user, setUser] = useLocalStorage("user", {});
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedId, setSelectedId] = useState(chunks[0].id);
  const GetThemeIcon = useMemo(() => {
    if (darkMode) {
      return <GetIcon iconName="light" className="chunk_icon" />;
    }
    return <GetIcon iconName="dark" className="chunk_icon" />;
  }, [darkMode]);

  useEffect(() => {
    if (window.matchMedia) {
      const mediaWatcher = window.matchMedia("(prefers-color-scheme: dark)");

      // if (mediaWatcher.matches) {
      //   setDarkMode(true);
      // } else {
      //   setDarkMode(false);
      // }

      const updateDarkMode = (event) => {
        const colorScheme = event.matches;
        console.log({ colorScheme });
        setDarkMode(colorScheme);
      };

      mediaWatcher.addEventListener("change", updateDarkMode);

      return () => {
        console.log("destroy");
        mediaWatcher.removeEventListener("change", updateDarkMode);
      };
    }
  }, []);

  const logoutHandler = () => {
    console.log({ vdotokClient });
    vdotokClient.Disconnect();
    setVdotokClient(null);
    setUser({});
    navigate("/signin", { replace: true });
  };

  const themeHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDarkMode(!darkMode);
    // vdotokClient.sendCustomRPC({ darkMode: !darkMode }, uuid);
  };

  return (
    <Container>
      <Link to="/" className="logo_container">
        <Logo src={logo} alt="logo" />
      </Link>
      <ListContainer>
        <UnorderListContainer>
          {chunks.map((chunk) => {
            const { id, Icon } = chunk;
            return (
              <Chunk key={id} active={selectedId === id}>
                <button
                  className="chunk_icon_container"
                  onClick={() => {
                    console.log("chunks", { id });
                    setSelectedId(id);
                  }}
                >
                  {Icon}
                </button>
              </Chunk>
            );
          })}
        </UnorderListContainer>
      </ListContainer>
      <Footer>
        <ThemeButton onClick={themeHandler}>{GetThemeIcon}</ThemeButton>
        <LogoutMenuContainer active={openMenu}>
          <LogoContainer onClick={() => setOpenMenu(!openMenu)}>
            <Image src={avatar} alt="profile" />
          </LogoContainer>
          {openMenu ? (
            <LogoutPopup>
              {/* <button className="logout_button">
                <p className="logout_text">Profile</p>
                <GetIcon iconName="profile" className="icon" />
              </button>
              <Divider /> */}
              <button className="logout_button" onClick={logoutHandler}>
                <p className="logout_text">Logout</p>
                <GetIcon iconName="logout" className="icon" />
              </button>
            </LogoutPopup>
          ) : null}
        </LogoutMenuContainer>
      </Footer>
    </Container>
  );
}

export default SideMenu;
