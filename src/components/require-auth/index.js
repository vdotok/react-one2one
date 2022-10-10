import React, { useMemo } from "react";
import { useLocalStorage } from "hooks/useLocalStorage";
import { Navigate } from "react-router-dom";
const RequireAuth = (props) => {
  const { children } = props;
  const [user] = useLocalStorage("user", {});

  console.log({ props, user });
  const componentRender = useMemo(() => {
    if (!user.auth_token) {
      console.log("useMemo");
      return <Navigate to="/signin" replace={true} />;
    }
    return children;
  }, [user.auth_token, children]);

  return componentRender;
};

export default RequireAuth;
