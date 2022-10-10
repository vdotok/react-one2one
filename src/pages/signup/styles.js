import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  /* background: ${({ theme }) => theme.bg}; */
  background-color: #f6f6f8;
  background-color: #54c295;
  background-color: #eedf4c;
`;
export const InnerContainer = styled.div`
  padding: 30px 0;
  max-width: 440px;
  min-width: 240px;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Image = styled.img`
  width: 60px;
`;

export const SignupHeading = styled.h2`
  margin-top: 20px;
  text-align: center;
  color: #000;
`;
export const SignupSubheading = styled.p`
  text-align: center;
  color: #7a7f9a;
  margin-top: 16px;
`;
export const FormContainer = styled.form`
  background-color: #fff;
  border-radius: 4px;
  margin-top: 30px;
  padding: 40px;
`;
