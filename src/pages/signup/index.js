import React, { useReducer, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "hooks/useLocalStorage";
import { signup } from "services/signup";
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
import { PROJECT_ID } from "constants";

const initialState = {
  username: "",
  email: "",
  password: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_USERNAME":
      return { ...state, username: action.value };
    case "GET_EMAIL":
      return { ...state, email: action.value };
    case "GET_PASSWORD":
      return { ...state, password: action.value };
    default:
      return state;
  }
};

function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useLocalStorage("user", {});
  const [state, dispatch] = useReducer(reducer, initialState);
  const [errorMessage, setErrorMessage] = useState("");

  const { username, email, password } = state;

  useEffect(() => {
    if (user.auth_token) {
      navigate("/", { replace: true });
    }
  }, [user.auth_token]);

  const SignupHandler = (event) => {
    event.preventDefault();
    const body = {
      project_id: PROJECT_ID,
      full_name: username,
      email,
      password,
    };
    signup(body)
      .then((res) => {
        console.log({ res });
        if (res.status === 200) {
          setUser(res.data);
          setErrorMessage("*Error: " + res.data.message);
        } else {
          console.log("something went wrong", { res });
        }
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
        <SignupHeading>Sign up</SignupHeading>
        <SignupSubheading>Get your Vdotok account now.</SignupSubheading>
        
        <div style={{ position: "fixed" }}>
          <p style={{ color: "red" }}>{errorMessage}</p>
        </div>

        <FormContainer onSubmit={SignupHandler}>
          <Input
            title="Username"
            icon="user"
            inputProps={{
              type: "text",
              placeholder: "Enter Username",
              value: username,
              onChange: (event) => {
                setErrorMessage("");
                dispatch({ type: "GET_USERNAME", value: event.target.value });
              },
            }}
          />
          <Input
            margin="20px 0"
            title="Email"
            icon="email"
            // inputError="no way"
            inputProps={{
              type: "text",
              placeholder: "Enter Email",
              value: email,
              onChange: (event) => {
                setErrorMessage("");
                dispatch({ type: "GET_EMAIL", value: event.target.value });
              },
            }}
          />
          <Input
            title="Password"
            icon="lock"
            inputProps={{
              type: "password",
              placeholder: "Enter Password",
              value: password,
              autoComplete: "on",
              onChange: (event) => {
                setErrorMessage("");
                dispatch({ type: "GET_PASSWORD", value: event.target.value });
              },
            }}
          />

          <Button
            margin="20px 0 0 0"
            buttonProps={{
              type: "submit",
            }}
          >
            Sign up
          </Button>
        </FormContainer>
        <RegisterLink
          margin="40px 0 0 0"
          question="Already have an account ?"
          link="/signin"
          title="Signin"
        />
      </InnerContainer>
    </Container>
  );
}

export default Signup;
