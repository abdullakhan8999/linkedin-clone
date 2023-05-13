import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Component>
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" alt="login-logo" />
        </a>
        <div>
          <Join>Join now</Join>
          <SignIn>Join now</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to your professional community</h1>
          <img src="/images/login-hero.svg" alt="login-hero-img" />
        </Hero>
        <Form>
          <Google>
            <img src="/images/google.svg" alt="google-img" />
            Sign in with Google
          </Google>
        </Form>
      </Section>
    </Component>
  );
}

const Component = styled.div`
  padding: 0px;
`;

const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  border-radius: 4px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;

const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-decoration: none;
  color: #0a66c2;
  margin-right: 12px;
  border-radius: 24px;
  transition-duration: 167ms;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);

    color: #0a66c2;
    text-decoration: none;
  }
`;

const Section = styled.section`
  display: flex;
  align-content: flex-start;
  min-height: 700px;
  padding-bottom: 1138px;
  padding-top: 40px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  margin: auto;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0;
  }
`;

const Hero = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 20px;
    width: 55%;
    font-size: 56px;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;
    /* z-index: 2; */
    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2px;
      letter-spacing: 0.5px;
    }
  }

  img {
    width: 700px;
    height: 600px;
    position: absolute;
    /* z-index: -1; */
    bottom: -2px;
    right: -150px;
    @media (max-width: 768px) {
      top: 230px;
      width: initial;
      position: initial;
      height: initial;
    }
  }
`;

const Form = styled.div`
  margin-top: 100px;
  width: 408px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Google = styled.a`
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  width: 100%;
  border-radius: 28px;
  height: 56px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 / 0%),
    inset 0 0 0 1px rgb(0 0 0 / 0%);
  vertical-align: middle;
  z-index: 2;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
  img {
    padding-right: 10px;
  }
`;

export default Login;