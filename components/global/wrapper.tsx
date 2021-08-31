import { Container } from "@mantine/core";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider,
  FacebookAuthProvider,
  getAuth,
  getRedirectResult,
} from "firebase/auth";
import { getApps, initializeApp } from "@firebase/app";
import Nav from "./nav";
import { useEffect } from "react";

if (!getApps.length) {
  initializeApp({
    apiKey: "AIzaSyDlBtYlp4pfEhiisgDT1U9PIZNf9qsC-mg",
    authDomain: "auth.codingbolt.com",
    projectId: "coding-bolt",
    appId: "1:1036440562165:web:a6a6f355c425ddd9efd8bc",
  });
}

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const twitterProvider = new TwitterAuthProvider();
const githubProvider = new GithubAuthProvider();
const auth = getAuth();

const Wrapper = (props: any) => {
  return (
    <Container
      style={{
        padding: 0,
      }}
      fluid
    >
      <Nav
        loginOptions={[
          googleProvider,
          facebookProvider,
          twitterProvider,
          githubProvider,
        ]}
        auth={auth}
      />
      <Container size={1660}>{props.children}</Container>
    </Container>
  );
};

export default Wrapper;
