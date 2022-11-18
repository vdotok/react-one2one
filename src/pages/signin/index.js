import React, { useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "hooks/useLocalStorage";
import { login } from "services/login";
import { PROJECT_ID } from "constants";
import Button from "components/button";
import Input from "components/input";
import RegisterLink from "components/register-link";
// import Logo from "assets/images/logo.png";
import {
  Container,
  InnerContainer,
  // ImageContainer,
  // Image,
  SignupHeading,
  SignupSubheading,
  FormContainer,
} from "./styles";

const initialState = {
  username_email: "",
  password: "",
  inputError: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_USERNAME_EMAIL":
      return { ...state, username_email: action.payload, inputError: "" };
    case "GET_PASSWORD":
      return { ...state, password: action.payload, inputError: "" };
    case "SET_ERROR":
      return { ...state, inputError: action.payload };
    default:
      return state;
  }
};

function Signin() {
  const navigate = useNavigate();
  const [user, setUser] = useLocalStorage("user", {});

  const [state, dispatch] = useReducer(reducer, initialState);
  const { username_email, password, inputError } = state;
  useEffect(() => {
    if (user.auth_token) {
      navigate("/", { replace: true });
    }
  }, [user.auth_token]);

  const loginHandler = (event) => {
    event.preventDefault();

    if (!username_email) {
      return dispatch({
        type: "SET_ERROR",
        payload: "Please enter username/email.",
      });
    } else if (!password) {
      return dispatch({
        type: "SET_ERROR",
        payload: "Please enter password.",
      });
    }
    const body = {
      email: username_email.toLowerCase(),
      password,
      project_id: PROJECT_ID,
    };
    login(body)
      .then((res) => {
        console.log({ res });
        if (res.status === 200) {
          if (res.data.status === 200) {
            setUser(res.data);
          } else {
            dispatch({
              type: "SET_ERROR",
              payload: res.data.message,
            });
          }
        } else {
          console.log("something went wrong", { res });
        }
        //
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  return (
    <Container>
      <InnerContainer>
        {/* <ImageContainer>
          <Image src={Logo} alt="vdotok" />
        </ImageContainer> */}
        <SignupHeading>Sign in</SignupHeading>
        <SignupSubheading>Sign in to continue to Vdotok.</SignupSubheading>
        <FormContainer onSubmit={loginHandler}>
          <Input
            title="Username/Email"
            icon="userEmail"
            inputProps={{
              type: "text",
              placeholder: "Enter Username/Email",
              value: username_email,
              onChange: (event) => {
                dispatch({
                  type: "GET_USERNAME_EMAIL",
                  payload: event.target.value,
                });
              },
            }}
          />

          <Input
            margin="20px 0 0 0"
            title="Password"
            icon="lock"
            inputError={inputError}
            inputProps={{
              type: "password",
              placeholder: "Enter Password",
              value: password,
              autoComplete: "on",
              onChange: (event) => {
                dispatch({ type: "GET_PASSWORD", payload: event.target.value });
              },
            }}
          />
          <Button
            margin="20px 0 0 0"
            buttonProps={{
              type: "submit",
            }}
          >
            Sign in
          </Button>
        </FormContainer>
        <RegisterLink
          margin="40px 0 0 0"
          question="Don't have an account ?"
          link="/signup"
          title="Signup now"
        />
      </InnerContainer>
    </Container>
  );
}

export default Signin;
