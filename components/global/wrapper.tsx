import { Container } from "@mantine/core";
import firebase from "firebase/app";
import { useEffect, useState } from "react";
import Nav from "./nav";
import "firebase/performance";

if (firebase.apps.length < 1) {
  firebase.initializeApp({
    apiKey: "AIzaSyDlBtYlp4pfEhiisgDT1U9PIZNf9qsC-mg",
    authDomain: "coding-bolt.firebaseapp.com",
    projectId: "coding-bolt",
    appId: "1:1036440562165:web:a6a6f355c425ddd9efd8bc",
  });
}

const Wrapper = (props: any) => {
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.
  var user = firebase.auth().currentUser;

  useEffect(() => {
    const perf = firebase.performance();
    var firebaseui = require("firebaseui");
    var uiConfig = {
      signInSuccessUrl: "/",
      callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
          return false;
        },
      },
      signInFlow: "popup",
      signInOptions: [
        {
          provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          clientId:
            "1036440562165-j7g06r27357plblbsbdosmf6k5gh6drv.apps.googleusercontent.com",
        },
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
      ],
      credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO,
    };

    var ui =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(firebase.auth());
    ui.disableAutoSignIn();

    if (user) {
      // Initialize the FirebaseUI Widget using Firebase.
      if (ui) {
        ui.delete();
      }
    } else {
      ui.start("#firebaseui-auth", uiConfig);
    }
  }, [user]);
  return (
    <Container
      style={{
        padding: 0,
      }}
      fluid
    >
      <Nav />
      <Container size={1660}>{props.children}</Container>
    </Container>
  );
};

export default Wrapper;
